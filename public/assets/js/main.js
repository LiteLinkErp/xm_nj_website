/*
Customize functions for xtreme padel zambia
*/
resetSlotSelection(){
  return;
}
function expandTable(){
  const expendBtn = document.getElementById('expendBtn');
  const myDiv     = document.getElementById('tableContainer');
  const icon      =  expendBtn.querySelector('i');
  if (icon.classList.contains('fa-arrows-alt')) {
    myDiv.classList.add('table-on-top');
    icon.classList.remove('fa-arrows-alt');
    icon.classList.add('fa-arrow-circle-left');

  }else {
    myDiv.classList.remove('table-on-top');
    icon.classList.add('fa-arrows-alt');
    icon.classList.remove('fa-arrow-circle-left');
  }
  
}
/*function for updating racket qty*/ 
     function updateRacketQty(){
        const quantityDropdown = document.getElementById('quantity');
        const totalPriceElement = document.getElementById('total-price');

            const quantity = parseInt(quantityDropdown.value, 10);
            const totalPrice = quantity*300;
            totalPriceElement.textContent = totalPrice;
     
     }
     /*function for updating bakk qty*/ 
     function updateBalltQty(){
      const quantityDropdown = document.getElementById('ball-quantity');
      const totalPriceElement = document.getElementById('ball-total-price');

      
          const quantity = parseInt(quantityDropdown.value, 10);
          const totalPrice = quantity*300;
          totalPriceElement.textContent = totalPrice;
   
   }
  //==================proceed booking function==================
  function proceedBooking(){
    if (!window.selectedBookings) {
      window.selectedBookings = [];
  }
    if (window.selectedBookings.length === 0){
      alertify.alert("Error", 'Please select Date, Time and Court', function() {
        
      });
  
    }else {
      localStorage.setItem('selectedBookings', JSON.stringify(window.selectedBookings));
      window.location.href = 'equipment.html';
    }

  }
  //===================================================================
  // Save Enquiry Function============================================
  //==================================================================
  async function saveEnquiry(event) {
   
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Select the form
    const form = document.querySelector('#enquiry-form');
  
    // Get the values of the input fields
    const subject = document.getElementById('enquiry-subject').value;
    const message = document.getElementById('enquiry-message').value;
    const name    = document.getElementById('enquiry-name').value;
    const email   = document.getElementById('enquiry-email').value;
    
    

    // Validate that all fields are filled
    if (!name || !email || !subject || !message) {
      alertify.error('All fields are required!'  );
      return; // Prevent form submission if any field is empty
     }

    try {
        const response = await fetch(
            'https://g0f64e949e59aa7-tbsdb20210810.adb.ap-mumbai-1.oraclecloudapps.com/ords/triopexb/xpbooking/saveenquiry',
            {
                method: 'POST', // HTTP method
                headers: {
                  'Access-Control-Allow-Origin' : '*', // Or a specific origin
                  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', // Allowed methods
                  'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Allowed headers
                  'person_name'                 : name,
                  'person_email'                : email,  
                  'enquiry_subject'             : subject,  
                  'enquiry_message'             : message, 
                  'Content-Type'                : 'application/json', // Define JSON payload
                },
                body: JSON.stringify({
                    person_name: name,
                    person_email: email,
                    enquiry_subject: subject,
                    enquiry_message: message,
                }), // Pass data as JSON
            }
        );
  
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        alertify.success('Enquiry submitted successfully!');
        form.reset();
    } catch (error) {
        console.error('Error submitting enquiry:', error);
        alertify.error('Failed to submit enquiry. Please try again.');
    }
  }

  //===================================================================
  // Save booking request============================================
  //==================================================================
  async function saveBookingRequest(event) {
   
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Select the form
    const form = document.querySelector('#booking-request-form');

    const fieldsToValidate = [
      { id: 'bookingFor', name: 'Booking For' },
      { id: 'booking_name', name: 'Your Name' },
      { id: 'booking_email', name: 'Email' },
      { id: 'booking_mobile', name: 'Mobile No' },
      { id: 'booking_From_Date', name: 'From Date' },
      { id: 'booking_To_Date', name: 'To Date' },
      { id: 'booking_timeSelect', name: 'Select Time' },
      { id: 'booking_teamMembers', name: 'Team Members Name' }
    ];
  
    let isValid = true;
  
    // Loop through all the fields and validate them
    fieldsToValidate.forEach(field => {
      const input = document.getElementById(field.id);
      if (!input.value.trim()) {
        // If field is empty, set border to red
        input.style.border = '1px solid red';
        isValid = false;
      } else {
        // Otherwise, remove red border
        input.style.border = '';
      }
    });
  
    if (isValid) {
      // If all fields are valid, submit the form
     
    } else {
      alertify.error('Please fill out all required fields.');
      return;
    }
  
    // Get the values of the input fields
    const bookingFor             = document.getElementById('bookingFor').value;
    const booking_name           = document.getElementById('booking_name').value;
    const booking_email          = document.getElementById('booking_email').value;
    const booking_mobile         = document.getElementById('booking_mobile').value;
    const booking_From_Date      = document.getElementById('booking_From_Date').value;
    const booking_To_Date        = document.getElementById('booking_To_Date').value;
    const booking_timeSelect     = document.getElementById('booking_timeSelect').value;
    const booking_teamMembers    = document.getElementById('booking_teamMembers').value;
    

    // Validate that all fields are filled
    if (!bookingFor || !booking_name|| !booking_email || !booking_mobile || !booking_From_Date || !booking_To_Date || !booking_timeSelect || !booking_teamMembers ) {
      alertify.error('All fields are required!'  );
      return; // Prevent form submission if any field is empty
     }

    try {
        const response = await fetch(
            'https://g0f64e949e59aa7-tbsdb20210810.adb.ap-mumbai-1.oraclecloudapps.com/ords/triopexb/xpbooking/xpbooking',
            {
                method: 'POST', // HTTP method
                headers: {
                  'Access-Control-Allow-Origin' : '*',                            // Or a specific origin
                  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',           // Allowed methods
                  'Access-Control-Allow-Headers': 'Content-Type, Authorization',  // Allowed headers
                  'Content-Type'                : 'application/json',             // Define JSON payload
                },
                body: JSON.stringify({
                  atr_bookingFor: bookingFor,
                  atr_booking_name: booking_name,
                  atr_booking_email: booking_email,
                  atr_booking_mobile: booking_mobile,
                  atr_booking_From_Date:booking_From_Date,
                  atr_booking_To_Date : booking_To_Date,
                  atr_booking_timeSelect :booking_timeSelect,
                  atr_booking_teamMembers : booking_teamMembers,

                }), // Pass data as JSON
            }
        );
  
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        alertify.alert("Booking Request", data.booking_response, function() {
          alertify.success("Thank You.");
        });
        form.reset();

    } catch (error) {
        console.error('Error submitting enquiry:', error);
        alertify.error('Failed to submit enquiry. Please try again.');
    }
  }

  //=====================================================================
  // Function to generate the time options for time select list 
  //=====================================================================
      function generateTimeOptions() {
        const timeSelect = document.getElementById('booking_timeSelect');
        let timeOptions = '';

        // Start from 6:00 hours and go up to 23:30 hours
        for (let hour = 6; hour <= 23; hour++) {
            const formattedHour = hour < 10 ? '0' + hour : hour; // Add leading zero for hours less than 10

            // Add both 00 and 30 minute intervals for each hour
            for (let minute = 0; minute <= 30; minute += 30) {
                const formattedMinute = minute === 0 ? '00' : '30'; // Format minute as '00' or '30'
                const startTime = `${formattedHour}:${formattedMinute} hrs`;
                
                // Calculate end time
                const endHour = (minute === 30) ? hour + 1 : hour + 1;
                const formattedEndHour = endHour < 10 ? '0' + endHour : endHour; // Add leading zero for end hour if needed
                const endTime = `${formattedEndHour}:${formattedMinute} hrs`;

                // Add time range to the options list
                timeOptions += `<option value="${startTime} to ${endTime}">${startTime} to ${endTime}</option>`;
            }
        }

        // Populate the select element with generated options
        timeSelect.innerHTML = timeOptions;
    }
//======================================================================
// function to show and hide booking options 
//======================================================================
function bookingOptions(pId){
  console.log(pId);
  const hideoption1 = document.querySelector('.booking-request-parent');
  const hideoption2 = document.querySelector('.legend');
  hideoption1.classList.add('hideBookingoption') ;
  hideoption1.classList.remove('showBookingoption') ;
  hideoption2.classList.add('hideBookingoption') ;
  hideoption2.classList.remove('showBookingoption') ;
  
  const showElement =document.getElementById(pId);
  showElement.classList.add('showBookingoption') ;
  showElement.classList.remove('hideBookingoption') ;
  console.log(showElement);
}


/*below functions cannot be called from outsite  */
(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

 /**
   * Scroll top book now
   */
  let scrollbooknow = document.querySelector('.scroll-book-now');

  function toggleScrollbooknow() {
    if (scrollbooknow) {
      window.scrollY > 100 ? scrollbooknow.classList.add('active') : scrollbooknow.classList.remove('active');
    }
  }
  scrollbooknow.addEventListener('click', (e) => {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
  });

  window.addEventListener('load', toggleScrollbooknow);
  document.addEventListener('scroll', toggleScrollbooknow);


  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
//======================new function to fetch data 
     async function fetchMessage() {
    fetch('https://g0f64e949e59aa7-tbsdb20210810.adb.ap-mumbai-1.oraclecloudapps.com/ords/triopexb/xpbooking/xpbooking', {
    method: 'GET', // or 'POST', 'PUT', 'DELETE', etc.
    headers: {
        'Access-Control-Allow-Origin': '*', // Or a specific origin
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', // Allowed methods
        'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Allowed headers
    },
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Handle the API response data

           try {
       

        // Extract unique dates and times
        const dates = [...new Set(data.items.map(item => new Date(item.booking_date).toLocaleDateString()))];
        const times = [...new Set(data.items.map(item => item.booking_time))].sort((a, b) => a - b);

        // Create table headers
        const headerRow = document.createElement('tr');
        const expendBtn = document.createElement('button');
        //expendBtn.textContent = 'Click Me';
        expendBtn.id = 'expendBtn';
        expendBtn.innerHTML = '<i class="fa fa-arrows-alt"></i>'
        expendBtn.onclick = function () {
          expandTable();
        };

        const expendth = document.createElement('th');
        expendth.appendChild(expendBtn) ;
        headerRow.appendChild(expendth); // Empty cell for row header
        dates.forEach(date => {
            const th = document.createElement('th');
            th.textContent = date;
            headerRow.appendChild(th);
        });
        bookingTable.appendChild(headerRow);

        // Create table rows for each booking time
        times.forEach(time => {
            const row = document.createElement('tr');
            const timeCell = document.createElement('td');
            timeCell.textContent = time+':00 Hrs';
            row.appendChild(timeCell);

            // Create cells for each date
            dates.forEach(date => {
                const cell = document.createElement('td');
                 cell.classList.add('my-class');
                const bookingsForDateAndTime = data.items.filter(item => 
                    new Date(item.booking_date).toLocaleDateString() === date && item.booking_time === time
                );

                // Populate cell with court numbers
                if (bookingsForDateAndTime.length > 0) {
                    //cell.textContent = bookingsForDateAndTime.map(b => `<div class="m-booked">Court ${b.court_no}</div>`).join(', ');
                    //cell.innerHTML   = bookingsForDateAndTime.map(b => `<div class="court bookedfor-${b.booked_for}">Court ${b.court_no}</div>`).join('');
                    cell.innerHTML = bookingsForDateAndTime
  .map(
    b =>
      `<div class="court bookedfor-${b.booked_for}" 
            data-booking-date="${b.booking_date}" 
            data-booking-time="${b.booking_time}"
            data-court-no="${b.court_no}">
         Court ${b.court_no}
       </div>`
  )
  .join('');

                } else {
                    cell.textContent = 'Available';
                }

                row.appendChild(cell);
            });

            bookingTable.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
        
    })
    .catch(error => {
        console.error('There was an error!', error);
    });

    //document.getElementById('message').textContent = data.message;
}



  //====================================
  async function fetchData() {
    const bookingTable = document.getElementById('bookingTable');
    const toDate = new Date().toISOString().split('T')[0]; // Example: today's date as YYYY-MM-DD
    const url = `https://xtremepadelzambia-ln6wiorvw-litelinkerps-projects.vercel.app/api/apex`;
    //const corsProxy = 'https://cors-anywhere.herokuapp.com/'; // CORS proxy

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Extract unique dates and times
        const dates = [...new Set(data.items.map(item => new Date(item.booking_date).toLocaleDateString()))];
        const times = [...new Set(data.items.map(item => item.booking_time))].sort((a, b) => a - b);

        // Create table headers
        const headerRow = document.createElement('tr');
        headerRow.appendChild(document.createElement('th')); // Empty cell for row header
        dates.forEach(date => {
            const th = document.createElement('th');
            th.textContent = date;
            headerRow.appendChild(th);
        });
        bookingTable.appendChild(headerRow);

        // Create table rows for each booking time
        times.forEach(time => {
            const row = document.createElement('tr');
            const timeCell = document.createElement('td');
            timeCell.textContent = time;
            row.appendChild(timeCell);

            // Create cells for each date
            dates.forEach(date => {
                const cell = document.createElement('td');
                 cell.classList.add('my-class');
                const bookingsForDateAndTime = data.items.filter(item => 
                    new Date(item.booking_date).toLocaleDateString() === date && item.booking_time === time
                );

                // Populate cell with court numbers
                if (bookingsForDateAndTime.length > 0) {
                    //cell.textContent = bookingsForDateAndTime.map(b => `<div class="m-booked">Court ${b.court_no}</div>`).join(', ');
                    //cell.innerHTML   = bookingsForDateAndTime.map(b => `<div class="court bookedfor-${b.booked_for}">Court ${b.court_no}</div>`).join('');
                    cell.innerHTML = bookingsForDateAndTime
  .map(
    b =>
      `<div class="court bookedfor-${b.booked_for}" 
            data-booking-date="${b.booking_date}" 
            data-booking-time="${b.booking_time}"
            data-court-no="${b.court_no}">
         Court ${b.court_no}
       </div>`
  )
  .join('');

                } else {
                    cell.textContent = 'Available';
                }

                row.appendChild(cell);
            });

            bookingTable.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}



  //=======================================
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);
  window.addEventListener('load', fetchMessage);
  
})();
