var obj = {"resumeData": [
        {
          "company": "3D Maker",
          "position": "Software Engineer",
          "startDate": "Apr 2018",
          "endDate": "Present",
          "location": "Valencia, CA",
          "duties": [
            "Gibraltar | http://gibraltarsalesgroup.com - WordPress site redesigned and engineered with HTML and CSS.",
            "Collaborates with UI and UX designers to assist with the development, maintenance, and enhancement of complex and diverse consumer-facing websites."
          ]
        },
        {
          "company": "General Assembly",
          "position": "Full-Stack Web Development Immersive Student",
          "startDate": "Nov 2017",
          "endDate": "Feb 2018",
          "location": "Washington, DC",
          "duties": [
            "Developed a portfolio of individual and collaborative projects including:",
            "Family Cookbook Manager | http://bit.ly/FamCkBk - Created with JavaScript, NodeJS, & Materialize. - Built a back end web application developed with views rendering to the front-end client side.",
            "StudyBuddy | http://biker-bunnies.surge.sh/ - Designed with JavaScript, HTML & CSS. - Engineered a flash-card web application with arrow key event listeners."
          ]
        },
        {
          "company": "CSCI",
          "position": "Operations Analyst II",
          "startDate": "Jan 2017",
          "endDate": "Sept 2017",
          "location": "Springfield, VA",
          "duties": [
            "Aligned with the PM to ensure successful program execution while managing program risks with mitigation plans in an Agile Scrum environment.",
            ""
          ]
        },
        {
          "company": "Get It Done Solutions (GID) Solutions",
          "position": "Lead Program Analyst",
          "startDate": "Jul 2016",
          "endDate": "Dec 2016",
          "location": "Stafford, VA",
          "duties": [
            "Oversaw analytical, administrative and technical acquisition support while ensuring that contractual, cost and Integrated Master Schedule (IMS) objectives were met.",
            "Cultivated and supervised junior program analysts."
          ]
        },
        {
          "company": "LTC Solutions",
          "position": "Management Analyst II",
          "startDate": "Jun 2012",
          "endDate": "Mar 2016",
          "location": "Stafford, VA",
          "duties": [
            "Orchestrated with the PM, to execute the management of proposals and contracts, in the hundreds while overseeing three (3) team members.",
            "Evaluated and reviewed topic submission for development to ensure applicability with the SBIR; resulting in the successful execution of annual $18M fiscal year budget."
          ]
        },
        {
          "company": "Saint Louis University",
          "position": "Program Coordinator",
          "startDate": "Sept 2008",
          "endDate": "Dec 2011",
          "location": "St. Louis, MO",
          "duties": [
            "Improved the 1818 ACC Program website design while managing the publication and composition as the webmaster and content creator."
          ]
        }
      ]
  }

var divId = document.getElementById("experience")
for (var i=0; i<obj.resumeData.length; i++) {
  for (var keys in obj.resumeData[i]){
    // console.log(keys +"-->"+obj.resumeData[i][keys])
    divId.innerHTML = divId.innerHTML + '<br/>' +obj.resumeData[i][keys]
  }
}
