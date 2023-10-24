     // Initialize Firebase with your project's configuration settings
     var firebaseConfig = {
        apiKey: "AIzaSyALz24iKFZvNfCc0Z7GM_S-4NuqxZrqVtE",
        authDomain: "leave-portal-1975e.firebaseapp.com",
        projectId: "leave-portal-1975e",
        storageBucket: "leave-portal-1975e.appspot.com",
        messagingSenderId: "690882610613",
        appId: "1:690882610613:web:023d2c06a911b878d905fc"
        };

    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

        // Initialize Flatpickr date picker
        flatpickr("#dateRange", {
            mode: "multiple",
            dateFormat: "m/d/Y", // Set the date format
          });
      
          // Event listener for form submission
          document.getElementById('leaveForm').addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission
            showOverlaySpinner(); // Show the overlay spinner
      
            // Perform form submission asynchronously
            submitForm()
              .then(function () {
                hideOverlaySpinner(); // Hide the overlay spinner when the process is complete
              });
          });
      
          // Event listener for the "Clear Form" button
          document.getElementById('resetBtn').addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default button behavior
            resetForm();
          });    
      
          // Function to show the overlay spinner
          function showOverlaySpinner() {
            document.getElementById('overlay').style.display = 'flex';
          }
      
          // Function to hide the overlay spinner
          function hideOverlaySpinner() {
            document.getElementById('overlay').style.display = 'none';
          }
      
          function hasUserAlreadyApplied(email, date) {
          return db.collection('leaveRequests')
              .where('email', '==', email)
              .where('selectedDates', 'array-contains', date)
              .get()
              .then((querySnapshot) => {
              return !querySnapshot.empty;
              })
              .catch((error) => {
              console.error("Error checking if user has already applied:", error);
              return false;
              });
          }
      
          // Function to submit leave request to Firestore
          async function submitForm() {
              const name = document.getElementById('name').value;
              const email = document.getElementById('email').value;
              const selectedDates = document.getElementById('dateRange').value;
      
              if (name === "" || !validateEmail(email) || !selectedDates) {
                  // Handle validation errors as needed
                  hideOverlaySpinner(); // Hide the overlay spinner if there's an error
                  return;
              }
      
              const selectedDateArray = selectedDates.split(',');
      
              // Check if the user has already applied for any of the selected dates
              const existingApplicationPromises = selectedDateArray.map(async (date) => {
                  const hasApplied = await hasUserAlreadyApplied(email, date.trim());
                  if (hasApplied) {
                  showAlert("danger", "You have already applied for leave on " + date + ". Please choose an alternate date.");
                  throw new Error("User has already applied for leave on " + date);
                  }
              });
      
              try {
                  await Promise.all(existingApplicationPromises);
      
                  // Check leave quota for each selected date
                  let leaveQuotaExceeded = false;
                  const dateCheckPromises = selectedDateArray.map((date) => {
                  return new Promise((resolve, reject) => {
                      const leaveCountRef = db.collection('leaveCounts').doc(date.trim());
                      db.runTransaction((transaction) => {
                      return transaction.get(leaveCountRef).then((doc) => {
                          if (!doc.exists || doc.data().count < 3) {
                          // Leave quota not exceeded for this date, increment the count
                          transaction.set(leaveCountRef, { count: (doc.data()?.count || 0) + 1 });
                          resolve();
                          } else {
                          // Leave quota exceeded for this date
                          leaveQuotaExceeded = true;
                          showAlert("danger", "Leave quota exceeded for " + date + ". Please choose an alternate date.");
                          reject();
                          }
                      });
                      })
                      .catch((error) => {
                      console.error("Error checking leave quota:", error);
                      reject();
                      });
                  });
                  });
      
                  await Promise.all(dateCheckPromises);
      
                  if (!leaveQuotaExceeded) {
                  // Leave quota not exceeded and no existing applications, proceed to submit the request
                  await db.collection('leaveRequests').add({
                      name: name,
                      email: email,
                      selectedDates: selectedDateArray
                  });
                  showAlert("success", "Leave request submitted successfully!");
                  resetForm();
                  }
              } catch (error) {
                  // Handle any errors
              } finally {
                  hideOverlaySpinner();
              }
              }
      
          // Function to validate email address using a regular expression
          function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
          }
      
          // Function to show a Bootstrap alert with a message and automatically hide it after 5 seconds
          function showAlert(type, message) {
            var alertElement = document.getElementById(type === "success" ? 'firestoreSuccess' : 'firestoreError');
            alertElement.innerHTML = '<i class="fas fa-' + (type === "success" ? 'check-circle' : 'exclamation-circle') + '"></i> ' + message;
            alertElement.style.display = 'block';
      
            // Automatically hide the alert after 5 seconds
            setTimeout(function () {
              alertElement.style.display = 'none';
            }, 5000); // 5000 milliseconds = 5 seconds
          }
      
          // Function to reset the form fields
          function resetForm() {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
      
            // Clear the Flatpickr instance
            var dateRangeInput = document.getElementById('dateRange');
            dateRangeInput._flatpickr.clear();
      
            // Reset the form
            document.getElementById('leaveForm').reset();
          }