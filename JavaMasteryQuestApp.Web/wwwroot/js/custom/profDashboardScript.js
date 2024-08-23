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
}

function viewAdvancedJava() {
    var contentSections = document.getElementsByClassName('content')[0].getElementsByTagName('div');
    for (var i = 0; i < contentSections.length; i++) {
        contentSections[i].style.display = 'none';
    }

    document.getElementById('advancedJavaContent').style.display = 'block';
}

function exportRecords() {
    alert('Exporting records...');
}

function importRecords() {
    alert('Importing records...');
}


function hideCarousels() {
    var carousels = document.getElementsByClassName('carousel-container');
    for (var i = 0; i < carousels.length; i++) {
        carousels[i].style.display = 'none';
    }
}

function showSlide(carouselId, index) {
    var carousel = document.getElementById(carouselId);
    var slide = carousel.getElementsByClassName('carousel-slide')[0];
    var items = slide.getElementsByClassName('carousel-item');
    var totalItems = items.length;
    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    }
    var offset = -currentIndex * 100;
    slide.style.transform = 'translateX(' + offset + '%)';
}

function nextSlide(carouselId) {
    currentIndex++;
    showSlide(carouselId, currentIndex);
}

function prevSlide(carouselId) {
    currentIndex--;
    showSlide(carouselId, currentIndex);
}

let currentIndex = 0;

setInterval(() => {
    nextSlide('basicJavaCarousel');
    nextSlide('advancedJavaCarousel');
}, 3000);

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

$(document).ready(function () {
    $.ajax({
        type: 'POST',
        url: '/Dashboard/profDashboard',
        //data: { fid, password },
        //contentType: 'application/x-www=form-url-urlencoded; charset=UTF-8',
        dataType: 'json',
        success: function (data) {
            console.log(window.location);
            if (data.result != 0) {
                window.location.href = '/Dashboard/profDashboard/';
            }

        }
    });

    $('#flogoutbtn').click(function () {
        window.location.href = '/Capstone/Home/';
    })
})
//function logout() {
//    window.location.href = 'Home.html';
//}
