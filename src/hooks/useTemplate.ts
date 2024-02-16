import {useSelector} from 'react-redux';

const useTemplate = (resumecolor: any) => {
  // Generate Resume from user Details.
  const {User}: any = useSelector(state => state);
  const experienceSection =
    User?.experience?.length > 0 ? User?.experience : '';
  const educationSection = User?.education?.length > 0 ? User?.education : '';
  const projectsSection = User?.projects?.length > 0 ? User?.projects : '';
  const skillsSection = User?.skills?.length > 0 ? User?.skills : '';
  const source = {
    html: `<div style="background: #fff; margin: 0 auto 0; border-radius: 3px; padding: 10px;">
      <div style="margin-bottom: 30px;">
        <div style="font-size: 40px; text-transform: uppercase; margin-bottom: 5px;">
          <span style="font-weight: 700;">${User?.userProfile?.firstName}</span>
          <span style="font-weight: 300;">${User?.userProfile?.lastName}</span>
        </div>
        <div style="margin-bottom: 20px;">
          <span style="color: #999; font-weight: 300;">Email: </span>
          <span style="color: #000; font-weight: bold;">${
            User?.userProfile?.email
          }</span>
          <span style="display: inline-block; height: 10px; border-left: 2px solid #999; margin: 0 10px;"></span>
          <span style="color: #999; font-weight: 300;">Phone: </span>
          <span style="color: #000; font-weight: bold;">${
            User?.userProfile?.phoneNumber
          }</span>
        </div>
        ${
          User?.objective &&
          `<div style="font-weight: bold; display: inline-block; margin-right: 10px; text-decoration: underline;">
          Objective
        </div>
        <div style="line-height: 20px;">
          ${User?.objective}
        </div>`
        }
      </div>
      <div style="line-height: 20px;">
        ${
          experienceSection &&
          `<div>
          <div
            style="letter-spacing: 2px; color:${
              resumecolor?.background ? resumecolor?.background : ' #54AFE4'
            }; font-weight: bold; margin-bottom: 10px; text-transform: uppercase;">
            Experience
          </div>
          <div>
            ${User?.experience
              ?.map(item => {
                return `<div style="margin-bottom: 40px;flex-direction: row;justify-content: space-between;">
              <div style="display: inline-block;">
                <div style="font-weight: bold;">${item?.companyName}</div>
                <div>${item?.address}</div>
                <div>${item?.startDate + item?.endDate}</div>
              </div>
              <div style="float:right">
                <div style="font-weight: bold;text-align:right">${
                  item?.jobTitle
                }</div>
              </div>
            </div>`;
              })
              .join('')}
          </div>
        </div>`
        }
        ${
          educationSection &&
          `<div>
          <div
            style="letter-spacing: 2px; color:${
              resumecolor?.background ? resumecolor?.background : ' #54AFE4'
            }; font-weight: bold; margin-bottom: 10px; text-transform: uppercase;">
            Education
          </div>
          <div>
            ${User?.education
              .map(item => {
                return `<div style="margin-bottom: 30px;flex-direction: row;justify-content: space-between;">
              <div style="display: inline-block;">
                <div style="font-weight: bold;">${item?.schoolName}</div>
                <div>${item?.address}</div>
                <div>${item?.startDate} - ${item?.endDate}</div>
              </div>
              <div style="float:right">
                <div style="font-weight: bold;text-align:right">${item?.degree} - ${item?.percentage}%</div>
              </div>
            </div>`;
              })
              .join('')}
          </div>
        </div>`
        }
        ${
          projectsSection &&
          `<div>
          <div
            style="letter-spacing: 2px; color:${
              resumecolor?.background ? resumecolor?.background : ' #54AFE4'
            }; font-weight: bold; margin-bottom: 10px; text-transform: uppercase;">
            Projects
          </div>
          <div>
            ${User?.projects
              .map(item => {
                return `<div style="margin-bottom: 30px;">
              <div style="font-weight: bold;">${item?.title}</div>
              <div>${item?.desc}</div>
            </div>`;
              })
              .join('')}
          </div>
        </div>`
        }
        ${
          User?.interests &&
          `<div style="margin-bottom: 40px;">
          <div
            style="letter-spacing: 2px; color:${
              resumecolor?.background ? resumecolor?.background : ' #54AFE4'
            }; font-weight: bold; margin-bottom: 10px; text-transform: uppercase;">
            Skills
          </div>
        </div>`
        }
        ${
          skillsSection &&
          `<div>
          <div
            style="letter-spacing: 2px; color:${
              resumecolor?.background ? resumecolor?.background : ' #54AFE4'
            }; font-weight: bold; margin-bottom: 10px; text-transform: uppercase;">
            Skills
          </div>
          <div>
            ${User?.skills
              .map(item => {
                return `<div style="margin-bottom: 5px;">
              <div>${item}</div>
            </div>`;
              })
              .join('')}
          </div>
        </div>`
        }
      </div>
    </div>`,
  };
  const professional = `
  <body style="font-family: "Open Sans", sans-serif;
        font-size: 16px;
        line-height: 1.5em;
        ">
    <div style="width: 500px;
        height: 100%;
        flex-direction:row;">
      <section style=" background: #fff;
        width: 35%;
        float: left;
        color: #9099a0;
        padding: 10px;
        ">
        <div style="min-height: 500px;
        min-width:100px;">
        <div>
          <div class="name-wrapper">
            <h1>${User?.userProfile?.firstName} <br />${
    User?.userProfile?.lastName
  }</h1>
          </div>
        </div>
         ${
           User?.objective &&
           `
           <div class="contact-presentation"> <!-- YOUR PRESENTATION RESUME  -->
            <p><span class="bold">Objective :</span>${User?.objective}</div>
          `
         }
          <div class="contact-info clearfix">
            <ul class="list-titles">
              <li>Call</li>
              <li>Mail</li>
              <li>Home</li>
            </ul>
            <ul class="list-content ">
              <li>${User?.userProfile?.phoneNumber}</li>
              <li>${User?.userProfile?.email}</li>
              <li>${User?.userProfile?.address}</li>
            </ul>
          </div>
           ${
             skillsSection &&
             ` <div class="section-wrapper clearfix">
            <h3 class="section-title">Skills</h3>
             ${User?.skills
               .map(item => {
                 return `
            <ul>
              <li class="skill-percentage">${item}</li>
            </ul>`;
               })
               .join('')}
          </div>`
           }
        </div>
      </section>
      <section style="background: ${
        resumecolor?.background ? resumecolor?.background : ' #3d3e42'
      };
        color: ${resumecolor?.textColor ? resumecolor?.textColor : '#9099a0'};
        float:right;
        padding: 10px;
        ">
        <div style="min-height: 1000px;
        float:right;
        min-width:350px;">
          ${
            experienceSection &&
            `
          <h3 style="color:${
            resumecolor?.titleColor ? resumecolor?.titleColor : '#66cc99'
          };
        text-transform: uppercase;
        font-size: 1.2em;
        text-align: left;
        margin-bottom: 20px;
        font-weight: 400;">Experience</h3>
              ${User?.experience
                ?.map((item: any) => {
                  return `
            <div style="width: 60%;
        flex-direction: row;
        justify-content: space-between;
        padding-right: 5%;
        margin-bottom: 10px;
        ">
          <div>
          <div style="color: white;
        margin-bottom: 15px;">${item?.companyName}</div>
              <div>${item?.startDate + item?.endDate}</div>
          </div>
              <div>${item?.jobTitle}</div>
            </div>
              `;
                })
                .join('')}
          `
          }
          ${
            educationSection &&
            `
          <h3 style="color:${
            resumecolor?.titleColor ? resumecolor?.titleColor : '#66cc99'
          };
        text-transform: uppercase;
        font-size: 1.2em;
        text-align: left;
        margin-bottom: 20px;
        font-weight: 400;">Education</h3>
          ${User?.education
            .map(item => {
              return `
          <div style="width: 60%;
          flex-direction: row;
          justify-content: space-between;
          padding-right: 5%;
          margin-bottom: 10px;">
            <div>
              <div style="color: white;
          margin-bottom: 15px;">${item?.schoolName}</div> <!-- NAME OF THE COMPANY YOUWORK WITH  -->
              <div>${item?.startDate} - ${item?.endDate}</div> <!-- THE TIME YOU WORK WITH THE COMPANY  -->
            </div>
            <div>
              <div style="text-align:right">${item?.degree}</div>
            </div>
          </div>
          `;
            })
            .join('')}
          `
          }
          ${
            projectsSection &&
            `
          <h3 style="color:${
            resumecolor?.titleColor ? resumecolor?.titleColor : '#66cc99'
          };
        text-transform: uppercase;
        font-size: 1.2em;
        text-align: left;
        margin-bottom: 20px;
        font-weight: 400;">Project</h3>
          ${User?.projects
            .map(item => {
              return `
          <div>
            <div>
              <div style="color: white; margin-bottom: 10px;margin-top: 10px;width:100px">${item?.title}</div>
              <!-- NAME OF THE COMPANY YOUWORK WITH  -->
              <div style="width:150px">${item?.desc}</div> <!-- THE TIME YOU WORK WITH THE COMPANY  -->
            </div>
          </div>
          `;
            })
            .join('')}
          `
          }
        </div>
      </section>
    </div>
  </body>

  </html>`;
  const downloadProfessional = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        @import url(https://fonts.googleapis.com/css?family=Varela+Round);
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700);

        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }

        html,
        body {}

        body {
          font-family: "Open Sans", sans-serif;
          font-size: 16px;
          line-height: 1.5em;
        }

        a {
          color: #66cc99;
          text-decoration: none;
        }

        .clearfix::after,
        .clearfix::before {
          content: " ";
          display: table;
        }

        .clearfix::after {
          clear: both;
        }

        .bold {
          color: #4a4e51;
          font-weight: 400;
        }

        .resume-wrapper {
          width: 820px;
          height: 100%;
        }

        .container {
          min-height: 1000px;
        }
        .profile {
          width: 40%;
          float: left;
          color: #9099a0;
        }
        .profile .name-wrapper {
          color:#fff
        }

        .profile h1 {
          font-size: 2.5em;
          text-align: left;
          font-family: "Varela Round", sans-serif;
          color: #4a4e51;
          text-transform: uppercase;
          line-height: 1em;
          padding-top: 40px;
        }

        @media (max-width: 1200px) {
          .profile h1 {
            padding-top: 20px;
          }
        }

        @media (max-width: 450px) {
          .profile h1 {
            font-size: 1.8em;
            padding-top: 20px;
          }
        }

        .profile li {
          margin-bottom: 10px;
        }

        .profile .picture-resume-wrapper {
          float: left;
        }
        .profile .picture-resume {
          width: 220px;
          height: 220px;
          background-size: cover;
          border-radius: 50%;
          margin-right: 0px;
          display: table;
          position: relative;
          vertical-align: middle;
        }

        .profile .picture-resume span {
          display: table-cell;
          vertical-align: middle;
          position: relative;
          margin: 0 auto;
          z-index: 10;
          text-align: center;
        }

        .profile .picture-resume img {
          border-radius: 25%;
          width: 220px;
          height: 220px;
        }
        .profile .contact-info {
          font-weight: 300;
        }
        .profile .list-titles {
          float: left;
          text-align: left;
          font-weight: 600;
          width: 40%;
          color: #4a4e51;
        }

        .profile .list-content {
          float: left;
          width: 60%;
          text-align: left;
          font-weight: 300;
        }

        .profile .contact-presentation {
          font-weight: 300;
        }
        .profile svg {
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }

        .profile .st0,
        .profile .st1 {
          fill: #66cc99;
        }

        .experience {
          background: ${
            resumecolor?.background ? resumecolor?.background : ' #3d3e42'
          };
          width: 50%;
          height:100%;
          float: right;
          color: ${resumecolor?.textColor ? resumecolor?.textColor : '#9099a0'};
        }
        @media (max-width: 850px) {
          .experience {
            height:100%;
          }
        }

        .experience h3.experience-title {
          color: ${
            resumecolor?.titleColor ? resumecolor?.titleColor : '#66cc99'
          };
          text-align: left;
          text-transform: uppercase;
          font-size: 1.2em;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .experience .company-wrapper {
          width: 30%;
          float: left;
          text-align: left;
          padding-right: 5%;
          margin-bottom: 10px;
        }

        @media (max-width: 450px) {
          .experience .company-wrapper {
            width: 30%;
            margin-bottom: 20px;
          }
        }

        .experience .job-wrapper {
          width: 70%;
          float: right;
          text-align: right;
          padding-right: 5%;
          margin-bottom: 60px;
        }

        @media (max-width: 450px) {
          .experience .job-wrapper {
            width: 100%;
            margin-bottom: 40px;
          }
        }

        .experience .experience-title {
          color: white;
          margin-bottom: 15px;
        }

        .section-padding {
          padding: 10px;
        }

        .section-wrapper {
          width: 50%;
          float: left;
          text-align: left;
          color: #9099a0;
          font-weight: 300;
          margin-bottom: 20px;
        }
      </style>
    </head>

    <body>
      <div class="resume-wrapper">
        <section class="profile section-padding">
          <div class="container">
          <div style="flex-direction:row">
            <div class="name-wrapper">
              <h1>${User?.userProfile?.firstName} <br />${
    User?.userProfile?.lastName
  }</h1>
            </div>
          </div>
           ${
             User?.objective &&
             `
             <div class="contact-presentation"> <!-- YOUR PRESENTATION RESUME  -->
              <p><span class="bold">Objective :</span>${User?.objective}</div>
            `
           }
            <div class="contact-info clearfix">
              <ul class="list-titles">
                <li>Call</li>
                <li>Mail</li>
                <li>Home</li>
              </ul>
              <ul class="list-content ">
                <li>${User?.userProfile?.phoneNumber}</li>
                <li>${User?.userProfile?.email}</li>
                <li>${User?.userProfile?.address}</li>
              </ul>
            </div>
             ${
               skillsSection &&
               ` <div class="section-wrapper clearfix">
              <h3 class="section-title">Skills</h3>
               ${User?.skills
                 .map(item => {
                   return `
              <ul>
                <li class="skill-percentage">${item}</li>
              </ul>`;
                 })
                 .join('')}
            </div>`
             }
          </div>
        </section>
        <section class="experience section-padding">
          <div class="container">
            <div class="clearfix"></div>
                ${
                  educationSection &&
                  `
            <h3 class="experience-title">Education</h3>
            ${User?.education
              .map(item => {
                return `
              <div>
              <div class="company-wrapper clearfix">
                <div class="experience-title">${item?.schoolName}</div> <!-- NAME OF THE COMPANY YOUWORK WITH  -->
                <div class="time">${item?.startDate} - ${item?.endDate}</div> <!-- THE TIME YOU WORK WITH THE COMPANY  -->
              </div>
              <div class="job-wrapper">
                <div class="experience-title">${item?.degree}</div> <!-- JOB TITLE  -->
                <div class="company-description">
                  <p>Percentahe : ${item?.percentage}</p> <!-- JOB DESCRIPTION  -->
                </div>
              </div>
            </div>
              `;
              })
              .join('')}
            `
                }
                  ${
                    experienceSection &&
                    `
            <h3 class="experience-title">Experience</h3>
                ${User?.experience
                  ?.map((item: any) => {
                    return `
              <div>
              <div class="company-wrapper clearfix">
                <div class="experience-title">${item?.companyName}</div>
                <div class="time">${item?.startDate + item?.endDate}</div>
              </div>
              <div class="job-wrapper">
                <div class="experience-title">${item?.jobTitle}</div>
              </div>
            </div>
                `;
                  })
                  .join('')}
            `
                  }
                  <div class="clearfix"></div>
                ${
                  projectsSection &&
                  `
            <h3 class="experience-title">Project</h3>
            ${User?.projects
              .map(item => {
                return `
              <div>
              <div>
                <div style="color: white; margin-bottom: 10px;margin-top: 10px;width:100px">${item?.title}</div> <!-- NAME OF THE COMPANY YOUWORK WITH  -->
                <div>${item?.desc}</div> <!-- THE TIME YOU WORK WITH THE COMPANY  -->
              </div>
            </div>
              `;
              })
              .join('')}
            `
                }
          </div>
        </section>
      </div>
    </body>

    </html>`;
  return [downloadProfessional, professional, source];
};
export default useTemplate;
