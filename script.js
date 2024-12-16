document.addEventListener("DOMContentLoaded", function() {
    const languagesDiv = document.getElementById("languages");
    const guessForm = document.getElementById("guess-form");
    const resultDiv = document.getElementById("result");
    const resultsTable = document.getElementById("results-table");
    const resultsTbody = resultsTable.querySelector("tbody");
    const successSound = document.getElementById("success-sound");
    const failureSound = document.getElementById("failure-sound");

    let attemptNumber = 0;
    let languages = [
        { name: "Python", color: "blue" },
        { name: "JavaScript", color: "yellow" },
        { name: "Java", color: "purple" },
        { name: "C", color: "brown" },
        { name: "Ruby", color: "pink" },
        { name: "C++", color: "green" },
        { name: "PHP", color: "grey" }
    ];

    // Show the languages for 4 seconds, then hide
    setTimeout(() => {
        languagesDiv.classList.add("hidden");
        guessForm.classList.remove("hidden");
    }, 4000);

    guessForm.addEventListener("submit", function(event) {
        event.preventDefault();
        attemptNumber++;
        const proglang = document.getElementById("proglang").value.trim();
        const color = document.getElementById("color").value.trim().toLowerCase();

        const language = languages.find(lang => lang.name.toLowerCase() === proglang.toLowerCase());
        let status = "";
        let statusClass = "";

        if (language && language.color === color) {
            status = "✔";
            statusClass = "correct";
            successSound.play();
        } else {
            status = "✖";
            statusClass = "incorrect";
            failureSound.play();
        }

        // Display the result in the table
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${attemptNumber}</td>
            <td style="background-color: ${language ? language.color : 'transparent'};">${proglang}</td>
            <td class="${statusClass}">${status}</td>
        `;
        resultsTbody.appendChild(row);

        // Show the results table if hidden
        if (resultsTable.classList.contains("hidden")) {
            resultsTable.classList.remove("hidden");
        }

        // Reset the form
        guessForm.reset();
    });
});
