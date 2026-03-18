export const projects = [

{
title:"Hotel Management System",
image:"https://images.unsplash.com/photo-1566073771259-6a8506099945",
desc:"A complete enterprise-level hotel management platform designed to handle real-world hotel operations with role-based access and real-time room tracking.",
details:[
"Designed and developed a full-stack hotel management system supporting Admin and Front Desk roles with role-based access control (RBAC).",
"Implemented end-to-end booking workflow including check-in, check-out, stay extension, and real-time room allocation.",
"Developed dynamic room status management (Vacant, Occupied, Housekeeping, Maintenance) with live updates.",
"Built guest management module to handle primary and additional guest details with structured data storage.",
"Created centralized admin dashboard for monitoring bookings, room availability, revenue tracking, and operational analytics.",
"Implemented billing and invoice generation system with payment tracking (paid, balance, total).",
"Developed RESTful APIs for booking, room, and guest operations ensuring scalable backend architecture.",
"Integrated real-time UI updates for room availability and booking status using optimized state management.",
"Deployed application using AWS Amplify with backend hosted on EC2 ensuring production readiness."
],
tech:["React.js","Mantine UI","Node.js","Express.js","MongoDB","Axios","AWS Amplify"]
},

{
title:"Endoscopy Imaging & Patient Report System",
image:"https://images.unsplash.com/photo-1579154204601-01588f351e67",
desc:"A medical-grade imaging and patient report management system built for hospitals and diagnostic centers with real-time camera integration.",
details:[
"Developed a healthcare application for capturing, storing, and managing endoscopy images and videos using React.js.",
"Integrated real-time camera streaming using Zango APIs for live visualization during medical procedures.",
"Built patient registration and medical record management system to maintain structured diagnostic history.",
"Implemented advanced media handling features including image/video capture, preview, cropping, and secure local storage.",
"Designed dynamic PDF report generation module including hospital, doctor, patient details, and diagnostic images.",
"Enabled in-app report preview and print functionality to streamline hospital workflow.",
"Optimized UI for touch-screen devices and embedded medical systems ensuring smooth performance.",
"Developed secure REST APIs for managing patient data and media files.",
"Focused on performance optimization and usability for real-time medical environments."
],
tech:["React.js","Mantine UI","REST APIs","Zango APIs"]
},

{
title:"Meghdooth Kiosk Dashboard (Water from Air)",
image:"https://ap-southeast-2.graphassets.com/AUM7yoUyNShKJ8D0dyjbWz/output=format:webp/lpL2fFujT5K2Hh6N1N2Q",
desc:"A real-time IoT monitoring dashboard for tracking environmental data and water generation metrics in public kiosk systems.",
details:[
"Developed a real-time IoT dashboard to monitor water generation from atmospheric humidity.",
"Integrated WebSocket and MQTT protocols for continuous live sensor data streaming.",
"Displayed key environmental metrics such as temperature, humidity, dew point, and water levels (High/Medium/Low).",
"Implemented real-time device status tracking including pump status and operational conditions.",
"Designed alert and notification system for air filter and water filter maintenance.",
"Built highly responsive UI optimized for public kiosk displays with high visibility and smooth interaction.",
"Handled multiple device monitoring with efficient data rendering and state updates.",
"Integrated REST APIs for historical data retrieval and analytics visualization.",
"Focused on performance and reliability for continuous real-time monitoring systems."
],
tech:["React.js","WebSocket","MQTT","REST APIs","IoT"]
}

]