const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Intern");
const Intern = require("../lib/Manager");

// HTML template that takes info from teamArray and inputs values within html
const renderHTML = (teamMembers) => {
  //html header with team title in header banner
  let startHTML = ` 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC&display=swap"
      rel="stylesheet"
    />

    <style>
      .card-header {
        padding: 20px;
        background-color: rgb(214, 248, 237);
        font-size: 20px;
      }
      body {
        margin-bottom: 2em;
        font-family: "Noto Serif TC", serif;
      }
      .card {
        margin-bottom: 2em;
        margin-top: 2em;
      }
    </style>
  </head>
  <body>
    <!-- heading -->
    <nav class="navbar" style="background-color: #e3f2fd; padding: 40px">
      <div class="container-fluid">
        <span style="font-size: 45px; margin: auto" class="navbar-brand mb-0 h1"
          >${teamMembers[0]}</span
        >
      </div>
    </nav>

    <div class="container">
    <div class="row">
      

  `;
  // loops through the array of team members and creates cards with their input info
  for (let i = 1; i < teamMembers.length; i++) {
    const name = teamMembers[i].getName();
    const id = teamMembers[i].getId();
    const email = teamMembers[i].getEmail();
    const title = teamMembers[i].getRole();

    cardInfo = `<div class="col-med-6 col-lg-4">
        <div
          class="card text-dark bg-light mb-3 shadow"
          style="max-width: 18rem"
        >
          <div class="card-header">
           ${name} <br />`;

    if (teamMembers[i].officeNumber) {
      cardInfo += `<i class="fas fa-mug-hot"></i>`;
    }
    if (teamMembers[i].gitHub) {
      cardInfo += `<i class="fas fa-cogs"></i>`;
    }
    if (teamMembers[i].school) {
      cardInfo += `<i class="fas fa-user-graduate"></i>`;
    }

    cardInfo += `  ${title}
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">id: ${id}</li>
              <li class="list-group-item"><a href="mailto:${email}"> email: ${email}</a> </li>`;

    if (teamMembers[i].officeNumber) {
      const officeNumber = teamMembers[i].getOfficeNumber();
      cardInfo += `<li class="list-group-item">office #: ${officeNumber}</li>
          </ul>
        </div>
      </div>
    </div>`;
    }

    if (teamMembers[i].gitHub) {
      const gitHub = teamMembers[i].getGitHub();
      cardInfo += `<li class="list-group-item"><a href="https://www.github/${gitHub}" target="_blank">GitHub: ${gitHub}</a> </li>
           </ul>
         </div>
       </div>
     </div>`;
    }

    if (teamMembers[i].school) {
      const school = teamMembers[i].getSchool();
      cardInfo += `<li class="list-group-item">School: ${school}</li>
            </ul>
          </div>
        </div>
      </div>`;
    }

    startHTML += cardInfo;
  }
  // end html added when objects in array have been looped through
  let endHTML = `
</div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
  startHTML += endHTML;
  return startHTML;
};
module.exports = renderHTML;
