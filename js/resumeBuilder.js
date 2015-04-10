
var bio = {
	"name" : "Angelina D'Souza",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "908-000-1122",
		"email" : "saran689@gmail.com",
		"github" : "saran689",
		"location" : "Minneapolis, MN, US"
	},
	"welcomeMessage" : "Welcome to my page!",
	"skills" : ["VXML","HTML & CSS","JavaScript","Oracle PL/SQL","Java"],
	"picURL" : "images/angelina.jpg",
	display : function() {
		var fName = HTMLheaderName.replace("%data%", bio.name);
		var fRole = HTMLheaderRole.replace("%data%", bio.role);
		var fMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
		var fEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
		var fGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
		var fLoc = HTMLlocation.replace("%data%", bio.contacts["location"]);
		var fPic = HTMLbioPic.replace("%data%", bio.picURL);
		var fWelMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(fName + fRole);
		$("#topContacts").append(fMobile + fEmail + fGithub + fLoc);
		$("#footerContacts").append(fMobile + fEmail + fGithub + fLoc);
		$("#header").append(fPic);
		$("#header").append(fWelMsg);
		$("#header").append(HTMLskillsStart);
		$("#mapDiv").append(googleMap);
		//$("#main").append(internationalizeButton);

		for (var sk in bio["skills"]) {
			var fSkills = HTMLskills.replace("%data%", bio.skills[sk]);
			$("#skills").append(fSkills);	
		}
	}
};


var education = {
	"schools": [
		{
			"name" : "NJIT",
			"location" : "Newark, NJ, US",
			"degree" : "Master of Science",
			"majors" : ["Computer Science"],
			"dates" : "2000",
			"url" : "http://www.njit.edu"
		},
		{
			"name" : "MIT",
			"location" : "Manipal, India",
			"degree" : "Bachelor of Engineering",
			"majors" : ["EE"],
			"dates" : "1990",
			"url" : "http://manipal.edu/mit.html"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"dates" : "Jan 2015",
			"url" : "https://www.udacity.com/course/ud304"
		},
		{
			"title" : "How to Use Git and GitHub",
			"school" : "Udacity",
			"dates" : "March 2015",
			"url" : "https://www.udacity.com/course/ud775"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "March 2015",
			"url" : "https://www.udacity.com/course/ud804"
		},
		{
			"title" : "Intro to jQuery",
			"school" : "Udacity",
			"dates" : "March 2015",
			"url" : "https://www.udacity.com/course/ud245"
		},
		{
			"title" : "Responsive Web Design Fundamentals",
			"school" : "Udacity",
			"dates" : "April 2015",
			"url" : "https://www.udacity.com/course/ud893"
		},
		{
			"title" : "Responsive Images",
			"school" : "Udacity",
			"dates" : "April 2015",
			"url" : "https://www.udacity.com/course/ud882"
		}
	],
	displaySchools: function() {
		if (education.schools.length > 0) {
			$("#education").append(HTMLschoolStart);
			for (var edu in education.schools) {
				var fName = HTMLschoolName.replace("%data%",education.schools[edu].name);
				fName = fName.replace("%url%",education.schools[edu].url);
				var fLocation = HTMLschoolLocation.replace("%data%",education.schools[edu].location);
				var fDegree = HTMLschoolDegree.replace("%data%",education.schools[edu].degree);
				var fMajors = HTMLschoolMajor.replace("%data%",education.schools[edu].majors);
				var fDates = HTMLschoolDates.replace("%data%",education.schools[edu].dates);
						
				$(".education-entry:last").append(fName + fDegree);
				$(".education-entry:last").append(fDates);
				$(".education-entry:last").append(fLocation);
				$(".education-entry:last").append(fMajors);
			}
		}
	},
	displayOnlineCourses: function() {
		if (education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);

			for (var oc in education.onlineCourses) {
				
				var fTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[oc].title);
				fTitle = fTitle.replace("%url%",education.onlineCourses[oc].url);
				var fURL = HTMLonlineURL.replace("%data%",education.onlineCourses[oc].url);
				var fSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[oc].school);
				var fDates = HTMLonlineDates.replace("%data%",education.onlineCourses[oc].dates);
						
				$(".education-entry:last").append(fTitle + fSchool);
				$(".education-entry:last").append(fDates);
				$(".education-entry:last").append("<br><div><hr class='line-hr'></div>");
			}
		}
	}
};

var work = {
	"jobs" : [
		{
			"employer" : "SpeakUp Inc.",
			"title" : "Applications Developer",
			"location" : "Minneapolis, MN, US",
			"dates" : "October 1997 - Present",
			"description" : "I build Interactive Voice applications using JS, VXML, C, Java, Shell, SQL. Develop custom reports and build web pages."
		},
		{
			"employer" : "Grubb Professionals, LLP.",
			"title" : "IT QA Analyst",
			"location" : "Somerset, NJ, US",
			"dates" : "February 1996 - October 1997",
			"description" : "Quality testing of front-end applications in a client-server architecture using C, UNIX, Shell, SQL, QA tools"
		},
		{
			"employer" : "Mod Switchgear",
			"title" : "Electrical Engineer",
			"location" : "Dubai, UAE",
			"dates" : "February 1992 - February 1994",
			"description" : "Electrical panel design."
		}
	],
	display: function() {
		if (work.jobs.length > 0) {
			$("#workExperience").append(HTMLworkStart);
			for (var job in work.jobs) {
				var fEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
				var fTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
				var fDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
				var fLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
				var fDesc = HTMLworkDescription.replace("%data%",work.jobs[job].description);
				$(".work-entry:last").append(fEmployer + fTitle);
				$(".work-entry:last").append(fDates);
				$(".work-entry:last").append(fLocation);
				$(".work-entry:last").append(fDesc);
			}
		}
	}
};

var projects = {
	"proj" : [
		{
			"title" : "ud304:Orange Udacity Mug",
			"dates" : "December 2014",
			"description" : "Create a website using knowledge from Intro to HTML and CSS and bootstrap framework files to match the given mockup.",
			"images" : []
		},
		{
			"title" : "Front-end Web Developer Intro Project",
			"dates" : "March 2015",
			"description" : "Create a simple website using minimal HTML & CSS knowledge.",
			"images" : []
		},
		{
			"title" : "ud804:Interactive Resume",
			"dates" : "March 2015",
			"description" : "Create an interactve resume page",
			"images" : []
		}
	],
	display: function() {
		if (projects.proj.length > 0) {
			for (var p in projects.proj) {
				$("#projects").append(HTMLprojectStart);
				var fPTitle = HTMLprojectTitle.replace("%data%",projects.proj[p].title);
				var fPDates = HTMLprojectDates.replace("%data%",projects.proj[p].dates);
				var fPDescr = HTMLprojectDescription.replace("%data%",projects.proj[p].description);
				var fPImage = HTMLprojectImage.replace("%data%",projects.proj[p].images);
				$(".project-entry:last").append(fPTitle + fPDates + fPDescr + fPImage);
			}
		}
	}
};




// Calls to display functions in each section
bio.display();
projects.display();
work.display();
education.displaySchools();
education.displayOnlineCourses();




