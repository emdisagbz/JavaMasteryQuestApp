function showTab(tabId) {
    var contentSections = document.getElementsByClassName('content')[0].getElementsByTagName('div');
    for (var i = 0; i < contentSections.length; i++) {
        contentSections[i].style.display = 'none';
    }

    var navItems = document.getElementsByClassName('sidebar')[0].getElementsByTagName('li');
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active');
    }

    var buttonGroups = document.getElementsByClassName('button-group');
    for (var i = 0; i < buttonGroups.length; i++) {
        buttonGroups[i].style.display = 'none';
    }

    hideCarousels();

    document.getElementById(tabId).style.display = 'block';
    document.getElementById(tabId.replace('Content', 'Btn')).classList.add('active');

   

    // Hide leaderboard by default when switching tabs
    document.getElementById('leaderboardContent').style.display = 'none';
    document.getElementById('profileTable').style.display = 'none';
    

}

function toggleButtonGroup(groupId, buttonId) {
    var buttonGroup = document.getElementById(groupId);
    var button = document.getElementById(buttonId);
    var isActive = buttonGroup.style.display === 'block';

    var buttonGroups = document.getElementsByClassName('button-group');
    for (var i = 0; i < buttonGroups.length; i++) {
        buttonGroups[i].style.display = 'none';
    }

    var navItems = document.getElementsByClassName('sidebar')[0].getElementsByTagName('li');
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active');
    }

    if (!isActive) {
        buttonGroup.style.display = 'block';
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
}


function viewBasicJava() {
    var contentSections = document.getElementsByClassName('content')[0].getElementsByTagName('div');
    for (var i = 0; i < contentSections.length; i++) {
        contentSections[i].style.display = 'none';
    }

    document.getElementById('basicJavaContent').style.display = 'block';
    populateClassTable('basicJavaSection', 'Basic');
}

function viewAdvancedJava() {
    var contentSections = document.getElementsByClassName('content')[0].getElementsByTagName('div');
    for (var i = 0; i < contentSections.length; i++) {
        contentSections[i].style.display = 'none';
    }

    document.getElementById('advancedJavaContent').style.display = 'block';
    populateClassTable('advancedJavaSection', 'Advanced');
}

function populateClassTable(sectionId, level) {
    var section = document.getElementById(sectionId);
    section.innerHTML = ''; // Clear previous entries

    // Example data; replace with your actual data source
    var studentData = [
        { name: 'Aniz', year: '2nd', section: '2' },
        { name: 'Bayer', year: '1st', section: '2' },
        { name: 'Mark', year: '3rd', section: '2' },
    ];

    studentData.forEach(function (student) {
        var row = document.createElement('tr');

        var nameCell = document.createElement('td');
        var yearCell = document.createElement('td');
        var sectionCell = document.createElement('td');

        nameCell.textContent = student.name;
        yearCell.textContent = student.year;
        sectionCell.textContent = student.section;

        row.appendChild(nameCell);
        row.appendChild(yearCell);
        row.appendChild(sectionCell);

        section.appendChild(row); // Append the row to the table body
    });
}

function exportRecords() {
    alert('Exporting records...');
}

function importRecords() {
    alert('Importing records...');
}

function logout() {
    window.location.href = '/Capstone/Home';
}

function hideCarousels() {
    var carousels = document.getElementsByClassName('carousel-container');
    for (var i = 0; i < carousels.length; i++) {
        carousels[i].style.display = 'none';
    }
}

function viewRecordJava(level) {
    var contentSections = document.getElementsByClassName('content')[0].getElementsByTagName('div');
    for (var i = 0; i < contentSections.length; i++) {
        contentSections[i].style.display = 'none';
    }

    // Hide class content when switching to Record view
    document.getElementById('basicJavaContent').style.display = 'none';
    document.getElementById('advancedJavaContent').style.display = 'none';

    // Show leaderboard content and update based on level
    document.getElementById('leaderboardContent').style.display = 'block';
    if (level === 'Basic') {
        document.getElementById('basicJavaLeaderboards').style.display = 'block';
        document.getElementById('advancedJavaLeaderboards').style.display = 'none';
    } else if (level === 'Advanced') {
        document.getElementById('basicJavaLeaderboards').style.display = 'none';
        document.getElementById('advancedJavaLeaderboards').style.display = 'block';
    }
    updateLeaderboard(level);
}

function updateLeaderboard(level) {
    var leaderboardData = {
        'Basic': {
            'Section 1': [
                { rank: 1, name: 'Aniz', year: '1st', section: '1', floor: 1, score: 29 },
                { rank: 2, name: 'Bayer', year: '2nd', section: '2', floor: 3, score: 25 },
                { rank: 3, name: 'Mark', year: '3rd', section: '3', floor: 4, score: 24 },
                { rank: 4, name: 'Iya', year: '1st', section: '2', floor: 5, score: 21 },
                { rank: 5, name: 'Eya', year: '2nd', section: '2', floor: 2, score: 0 },
                { rank: 6, name: 'Ashie', year: '3rd', section: '1', floor: 1, score: 20 }
            ],
            'Section 2': [
                { rank: 1, name: 'Aniz', year: '1st', section: '2', floor: 3, score: 32 },
                { rank: 2, name: 'Bayer', year: '2nd', section: '1', floor: 7, score: 29 },
                { rank: 3, name: 'Mark', year: '3rd', section: '1', floor: 6, score: 27 },
                { rank: 4, name: 'Iya', year: '1st', section: '3', floor: 5, score: 25 },
                { rank: 5, name: 'Eya', year: '2nd', section: '3', floor: 5, score: 21 },
                { rank: 6, name: 'Ashie', year: '3rd', section: '3', floor: 3, score: 20 }
            ],
            'Section 3': [
                { rank: 1, name: 'Aniz', year: '1st', section: '1', floor: 2, score: 8 },
                { rank: 2, name: 'Bayer', year: '2nd', section: '1', floor: 3, score: 25 },
                { rank: 3, name: 'Mark', year: '3rd', section: '1', floor: 1, score: 23 },
                { rank: 4, name: 'Iya', year: '1st', section: '1', floor: 5, score: 12 },
                { rank: 5, name: 'Eya', year: '2nd', section: '1', rank: 5, floor: 6, score: 25 },
                { rank: 6, name: 'Ashie', year: '3rd', section: '1', floor: 1, score: 2 }
            ]
        },
        'Advanced': {
            'Section 1': [
                { rank: 1, name: 'Aniz', year: '1st', section: '1', floor: 2, score: 2 },
                { rank: 2, name: 'Bayer', year: '2nd', section: '1', floor: 4, score: 3 },
                { rank: 3, name: 'Mark', year: '3rd', section: '1', floor: 3, score: 1 },
                { rank: 4, name: 'Iya', year: '1st', section: '1', floor: 1, score: 5 },
                { rank: 5, name: 'Eya', year: '2nd', section: '1', floor: 6, score: 6 },
                { rank: 6, name: 'Ashie', year: '3rd', section: '1', floor: 6, score: 4 }
            ],
            'Section 2': [
                { rank: 1, name: 'Aniz', year: '1st', section: '2', floor: 2, score: 10 },
                { rank: 2, name: 'Bayer', year: '2nd', section: '1', floor: 3, score: 0 },
                { rank: 3, name: 'Mark', year: '3rd', section: '2', floor: 1, score: -2 },
                { rank: 4, name: 'Iya', year: '1st', section: '2', floor: 1, score: 2 },
                { rank: 5, name: 'Eya', year: '2nd', section: '2', floor: 5, score: 5 },
                { rank: 6, name: 'Ashie', year: '3rd', section: '3', floor: 4, score: 8 }
            ],
            'Section 3': [
                { rank: 1, name: 'Aniz', year: '1st', section: '3', floor: 1, score: 2 },
                { rank: 2, name: 'Bayer', year: '2nd', section: '1', floor: 2, score: 4 },
                { rank: 3, name: 'Mark', year: '3rd', section: '2', floor: 6, score: 10 },
                { rank: 4, name: 'Iya', year: '1st', section: '2', floor: 4, score: 12 },
                { rank: 5, name: 'Eya', year: '2nd', section: '3', floor: 7, score: 2 },
                { rank: 6, name: 'Ashie', year: '3rd', section: '1', floor: 2, score: 3 }
            ]
        }
    };

    var sections = {
        'Basic': ['basicJavaSection1', 'basicJavaSection2', 'basicJavaSection3'],
        'Advanced': ['advancedJavaSection1', 'advancedJavaSection2', 'advancedJavaSection3']
    };

    var sectionIds = sections[level];

    sectionIds.forEach(function (sectionId, index) {
        var leaderboardSection = document.getElementById(sectionId);
        leaderboardSection.innerHTML = ''; // Clear previous entries

        var filteredData = leaderboardData[level][`Section ${index + 1}`];

        filteredData.forEach(function (entry) {
            var row = leaderboardSection.insertRow();

            var rankClass = '';
            if (entry.rank === 1) {
                rankClass = 'rank-1';
            } else if (entry.rank === 2) {
                rankClass = 'rank-2';
            } else if (entry.rank === 3) {
                rankClass = 'rank-3';
            }

            row.className = rankClass;

            var rankCell = row.insertCell(0);
            var nameCell = row.insertCell(1);
            var yearCell = row.insertCell(2);
            var sectionCell = row.insertCell(3);
            var floorCell = row.insertCell(4);
            var scoreCell = row.insertCell(5);


            rankCell.textContent = entry.rank;
            nameCell.textContent = entry.name;
            yearCell.textContent = entry.year;
            sectionCell.textContent = entry.section;
            floorCell.textContent = entry.floor;
            scoreCell.textContent = entry.score;

        });
    });
}

showTab('profileContent');

function addSection(containerId) {
    var sectionContainer = document.getElementById(containerId);
    var sectionCount = sectionContainer.getElementsByTagName('div').length + 1;
    var newSection = document.createElement('div');
    newSection.innerHTML = `
        <h4>Section ${sectionCount}</h4>
        <button onclick="removeSection(this)">Remove Section</button>
    `;
    sectionContainer.appendChild(newSection);
}

function removeSection(button) {
    var sectionContainer = button.parentElement.parentElement;
    sectionContainer.removeChild(button.parentElement);
}

function searchTable(tableId, searchId) {
    // Get the search input value
    var input = document.getElementById(searchId);
    var filter = input.value.toLowerCase();

    // Get the table and its rows
    var table = document.getElementById(tableId);
    var rows = table.getElementsByTagName('tr');

    // Loop through all table rows (skipping the header row)
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
        var found = false;

        // Loop through all cells in the row
        for (var j = 0; j < cells.length; j++) {
            if (cells[j].innerText.toLowerCase().indexOf(filter) > -1) {
                found = true;
                break;
            }
        }

        // Show or hide the row based on whether it matches the search query
        if (found) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}

function filterRecords(tableId) {
    var floorSelect = document.getElementById(`floorFilter${tableId.match(/\d+/)[0]}`);
    var sectionSelect = document.getElementById(`sectionFilter${tableId.match(/\d+/)[0]}`);

    var selectedFloor = floorSelect.value;
    var selectedSection = sectionSelect.value;

    var table = document.getElementById(tableId);
    var rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var floorCell = row.getElementsByTagName('td')[4];
        var sectionCell = row.getElementsByTagName('td')[3];

        var floorText = floorCell.textContent.trim() || floorCell.innerText.trim();
        var sectionText = sectionCell.textContent.trim() || sectionCell.innerText.trim();

        var floorMatch = (selectedFloor === 'all' || floorText === selectedFloor);
        var sectionMatch = (selectedSection === 'all' || sectionText === selectedSection);

        // Corrected logic: Show row only if it matches both filters
        if (floorMatch && sectionMatch) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }

        // Debugging
        console.log(`Row ${i}: Floor ${floorText}, Section ${sectionText}, Floor Match: ${floorMatch}, Section Match: ${sectionMatch}`);
    }
}

function applyFilters(tableId) {
    filterRecords(tableId);
}
