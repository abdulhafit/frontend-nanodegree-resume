var data = "%data%";
var bio = {
    "name": "Abdulhfit Abdurezak",
    "role": "Web and Software Developer",
    "contacts": {
        "mobile": "+25377157083",
        "email": "abdul.hafed@safarifoneict.com",
        "github": "Abdulhfit",
        "twitter": "Raxiiq2011",
        "location": "Djibouti"
    },
    "welcomeMessage": "Welcome to my resume",
    "skills": ["Web development ", "System Administration ", "Networking ", "Teaching ", "Problem Solving "],
    "biopic": "images/main.jpg"
};

var education = {

    "schools": [{
        "name": "Benadir University",
        "location": "Mogadishu",
        "degree": "Bachelor Degree",
        "majors": ["Electrical and Electronics Engineering"],
        "dates": "2010 - 2015",
        "url": "http://www.benadiruniversity.net"
    }],

    "onlineCourses": [{
        "title": "Front-end Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }]
};



var work = {
    "jobs": [{
        "employer": "Safarifone",
        "title": "Infrastructure Engineer",
        "dates": "2015-present",
        "location": "Djibouti",
        "description": "My work mainly involves in Infrastructure task such as dealing with servers and network equipments, commisioning, maintaing and troubleshooting them some times we work extra hours for fault fixing and acheiving emergency work needs. My work mainly involves in Infrastructure task such as dealing with servers and network equipments, commisioning, maintaing and troubleshooting them some times we work extra hours for fault fixing and acheiving emergency work needs.My work mainly involves in Infrastructure task such as dealing with servers and network equipments, commisioning, maintaing and troubleshooting them some times we work extra hours for fault fixing and acheiving emergency work needs.My work mainly involves in Infrastructure task such as dealing with servers and network equipments, commisioning, maintaing and troubleshooting them some times we work extra hours for fault fixing and acheiving emergency work needs.My work mainly involves in Infrastructure task such as dealing with servers and network equipments, commisioning, maintaing and troubleshooting them some times we work extra hours for fault fixing and acheiving emergency work needs.My work mainly involves in Infrastructure task such as dealing with servers and network equipments, commisioning, maintaing and troubleshooting them some times we work extra hours for fault fixing and acheiving emergency work needs.My work mainly involves in Infrastructure task such as dealing with servers and network equipments, commisioning, maintaing and troubleshooting them some times we work extra hours for fault fixing and acheiving emergency work needs.My work mainly involves in Infrastructure task such as dealing with servers and network equipments, commisioning, maintaing and troubleshooting them some times we work extra hours for fault fixing and acheiving emergency work needs. "


    }, {
        "employer": "Safarifone",
        "title": "Senior Developer and Projects Leader",
        "dates": "Coming Future",
        "location": "Djibouti",
        "description": "Leading web and Software development teams building successfull business oriented applications.Leading web and Software development teams building successfull business oriented applications. Leading web and Software development teams building successfull business oriented applications. Leading web and Software development teams building successfull business oriented applications. Leading web and Software development teams building successfull business oriented applications. Leading web and Software development teams building successfull business oriented applications. Leading web and Software development teams building successfull business oriented applications. Leading web and Software development teams building successfull business oriented applications. Leading web and Software development teams building successfull business oriented applications. Leading web and Software development teams building successfull business oriented applications. Leading web and Software development teams building successfull business oriented applications. Leading web and Software development teams building successfull business oriented applications. Leading web and Software development teams building successfull business oriented applications. Leading web and Software development teams building successfull business oriented applications. Leading web and Software development teams building successfull business oriented applications. Leading web and Software development teams building successfull business oriented applications. Leading web and Software development teams building successfull business oriented applications. Leading web and Software development teams building successfull business oriented applications. Leading web and Software development teams building successfull business oriented applications."
    }]
};

var project = {
    "projects": [{
        "title": "Portfolio",
        "dates": "2016 - January",
        "description": "My Portfolio project as part of my Front-end Nanodegree projects demonstrating some of my projectsit includes links to my projects at github My Portfolio project as part of my Front-end Nanodegree projects demonstrating some of my projectsit includes links to my projects at github My Portfolio project as part of my Front-end Nanodegree projects demonstrating some of my projectsit includes links to my projects at github My Portfolio project as part of my Front-end Nanodegree projects demonstrating some of my projectsit includes links to my projects at github My Portfolio project as part of my Front-end Nanodegree projects demonstrating some of my projectsit includes links to my projects at github My Portfolio project as part of my Front-end Nanodegree projects demonstrating some of my projectsit includes links to my projects at github",

        "images": [
            "http://pgjab.com/wp-content/uploads/2015/09/5-Tips-For-Creating-The-Perfect-Web-Design-Portfolio.png",
            "http://pgjab.com/wp-content/uploads/2015/09/5-Tips-For-Creating-The-Perfect-Web-Design-Portfolio.png"
        ],

    }]

};



bio.display = function() {
    formattedName = HTMLheaderName.replace(data, bio.name);
    formattedRole = HTMLheaderRole.replace(data, bio.role);
    formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    formattedPic = HTMLbioPic.replace(data, bio.biopic);
    formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

    $("#header").prepend(formattedName, formattedRole);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedPic);
    $("#header").append(formattedWelcome);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (item in bio.skills) {
            var formattedSkills = HTMLskills.replace(data, bio.skills[item]);
            $("#skills").append(formattedSkills);
        }
    }
};



work.display = function() {

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
        var formattedtitle = HTMLworkTitle.replace(data, work.jobs[job].title);
        var nameAndTitle = formattedEmployer + " " + formattedtitle;
        var formattedDate = HTMLworkDates.replace(data, work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);


        $(".work-entry:last").append(nameAndTitle);
        //$(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDate);
        $(".work-entry:last").append(formattedDescription);
    }
};


education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace(data, education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[school].dates);
        var formattedSchoolLocations = HTMLschoolLocation.replace(data, education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocations);
        $(".education-entry:last").append(formattedSchoolMajor);




    }
    $(".education-entry").append(HTMLonlineClasses);
    for (onCourse in education.onlineCourses) {

        var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[onCourse].title);
        var formattedtSchool = HTMLonlineSchool.replace(data, education.onlineCourses[onCourse].school);
        var formattedtDates = HTMLonlineDates.replace(data, education.onlineCourses[onCourse].dates);
        var formattedUrl = HTMLonlineURL.replace(data, education.onlineCourses[onCourse].url);
        var courseAndSchool = formattedTitle + formattedtSchool;
        $(".education-entry").append(courseAndSchool);
        $(".education-entry").append(formattedtDates);
        $(".education-entry").append(formattedUrl);
    }


};




project.display = function() {
    for (eachProject in project.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace(data, project.projects[eachProject].title);
        var formattedProjectDates = HTMLprojectDates.replace(data, project.projects[eachProject].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace(data, project.projects[eachProject].description);

        if (project.projects[eachProject].images.length > 0) {
            for (image in project.projects[eachProject].images) {
                var formatedProjectImage = HTMLprojectImage.replace(data, project.projects[eachProject].images[image]);
                $(".project-entry:last").append(formatedProjectImage);
            }
        }

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);
    }
};


function inName() {
    var name = bio.name;
    name = name.trim().split(" ");
    name1 = name[1].toUpperCase();
    name0 = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name0 + " " + name1;


}

function locationizer(work_obj) {
    var workLocations = [];
    for (job in work_obj.jobs) {
        workLocations.push(work.jobs[job].location);
    }
    return workLocations;
}


bio.display();
project.display();
work.display();
education.display();

locationizer(work);
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {

    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});