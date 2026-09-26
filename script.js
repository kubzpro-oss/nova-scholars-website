// ========================================
// NOVA SCHOLARS STUDENT HUB
// CENTRAL JAVASCRIPT SYSTEM
// ========================================

console.log("Nova Scholars Student Hub is running successfully.");


// ========================================
// CURRENT YEAR
// ========================================

document.querySelectorAll(".current-year").forEach(function(element) {
    element.textContent = new Date().getFullYear();
});


// ========================================
// COURSE INFORMATION
// ========================================

const courses = {

    TOM: {
        code: "TOM",
        name: "Tour Operations Management",
        icon: "✈️",
        page: "tom.html",
        description: "Tour operations, tour packages, travel agencies, assignments and revision materials."
    },

    PTG: {
        code: "PTG",
        name: "Principles of Tour Guiding",
        icon: "🧭",
        page: "ptg.html",
        description: "Tour guiding principles, responsibilities, skills, coursework and revision materials."
    },

    AFT: {
        code: "AFT",
        name: "Air Fares and Ticketing",
        icon: "🎫",
        page: "aft.html",
        description: "Air fares, ticketing, reservations, airline terminology and revision materials."
    },

    FA: {
        code: "FA",
        name: "Financial Accounting",
        icon: "📊",
        page: "fa.html",
        description: "Cashbook, journals, ledger, trial balance, accounting exercises and past papers."
    },

    KIS: {
        code: "KIS",
        name: "Kiswahili Language",
        icon: "🗣️",
        page: "kiswahili.html",
        description: "Kiswahili vocabulary, grammar, U-nouns, coursework and language exercises."
    },

    CHT: {
        code: "CHT",
        name: "Culture and Heritage Tourism",
        icon: "🏛️",
        page: "cht.html",
        description: "Culture, heritage, tourism destinations, coursework and revision materials."
    }

};


// ========================================
// SEARCH FUNCTION
// ========================================

function searchResources() {

    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    if (!searchInput || !searchResults) {
        return;
    }

    const searchText = searchInput.value.toLowerCase().trim();

    if (searchText === "") {
        searchResults.innerHTML = "";
        return;
    }


    // Main website sections
    const mainResources = [

        {
            name: "Coursework",
            description: "Coursework questions, completed work and group assignments.",
            link: "coursework.html"
        },

        {
            name: "Notes",
            description: "Course notes, lecture notes and revision materials.",
            link: "notes.html"
        },

        {
            name: "Timetable",
            description: "Nova Scholars Year 2 Group B class timetable.",
            link: "timetable.html"
        },

        {
            name: "Documents",
            description: "Course outlines, assignment instructions and group documents.",
            link: "documents.html"
        },

        {
            name: "Gallery",
            description: "Nova Scholars group photos and memories.",
            link: "gallery.html"
        },

        {
            name: "Announcements",
            description: "Latest Nova Scholars announcements and updates.",
            link: "announcements.html"
        }

    ];


    // Convert all courses into searchable resources
    const courseResources = Object.values(courses).map(function(course) {

        return {
            name: course.name,
            description: course.description,
            link: course.page
        };

    });


    // Combine everything
    const resources = mainResources.concat(courseResources);


    // Search
    const results = resources.filter(function(resource) {

        return (
            resource.name.toLowerCase().includes(searchText) ||
            resource.description.toLowerCase().includes(searchText)
        );

    });


    // No results
    if (results.length === 0) {

        searchResults.innerHTML = `
            <div class="search-result">
                <h3>No results found</h3>
                <p>
                    Try searching for a course unit, coursework,
                    notes, documents or another resource.
                </p>
            </div>
        `;

        return;
    }


    // Display results
    searchResults.innerHTML = results.map(function(resource) {

        return `
            <div class="search-result">
                <h3>${resource.name}</h3>
                <p>${resource.description}</p>
                <a href="${resource.link}">Open Resource →</a>
            </div>
        `;

    }).join("");

}


// ========================================
// DISPLAY ALL COURSES
// ========================================

function displayCourses(containerId) {

    const container = document.getElementById(containerId);

    if (!container) {
        return;
    }


    container.innerHTML = Object.values(courses).map(function(course) {

        return `
            <div class="card">

                <h3>${course.icon} ${course.name}</h3>

                <p>${course.description}</p>

                <a href="${course.page}" class="card-button">
                    Open ${course.code} →
                </a>

            </div>
        `;

    }).join("");

}