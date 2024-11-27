/**
* Template Name: Selecao
* Template URL: https://bootstrapmade.com/selecao-bootstrap-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
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
      alert('Please select date and time')
    }else {
      localStorage.setItem('selectedBookings', JSON.stringify(window.selectedBookings));
      window.location.href = 'equipment.html';
    }

  }
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
  window.addEventListener('load', fetchData);
  
})();