'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/gv2325/cl6e95a27003z14ntvmrmffuw',
  accessToken:
    'pk.eyJ1IjoiZ3YyMzI1IiwiYSI6ImNsNmN1dWZ2MzBldmEzanAyNGswOXZvaXcifQ.d-fWIIjKWTFb5QaB_N1ISg',
  CSV: './Sample_Data.csv',
  center: [-73.962, 40.807],
  zoom: 16,
  title: 'Columbia Explorer',
  description:
    'This map shows the locations of Columbia University resources, fun facts, locations of cafes and more! This is a crowd-sourced map, so please feel free to add your own data!',
  sideBarInfo: ['Location_Name', 'Address', 'Phone'],
  popupInfo: ['Location_Name'],
  filters: [
    {
      type: 'dropdown',
      title: 'Categories: ',
      columnHeader: 'Categories',
      listItems: [
        'Services',
        'Information',
        'Retail',
        'Accessibility',
        'Food',
        'Health',
        'Administration',
      ],
    },
    {
      type: 'checkbox',
      title: 'Availability: ',
      columnHeader: 'Availability', // Case sensitive - must match spreadsheet entry
      listItems: ['Weekday', 'Open All Days', 'Weekend'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: 'dropdown',
      title: 'Type: ',
      columnHeader: 'Type',
      listItems: [
        'Public Safety',
        'History',
        'Facts',
        'Vending',
        'Food Truck',
        'Gate',
        'Wheelchair',
        'Recreation',
        'Statue',
        'Grocery',
        'Office',
        'Cafe',
        'Dining Hall',
        'Restaurant',
        'Library',
        'University',
      ],
    },
  ],
};
