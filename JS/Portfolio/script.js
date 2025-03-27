const getData = async (data) => {
  const url = `http://localhost:7788/${data}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const loadProjects = async (x, y) => {
  if (x) {
    const kiekis = await getData("projects");
    console.log(kiekis.length);
    x += kiekis.length;
  } else if (y) {
    x = y;
  } else {
    x = "projects";
  }

  const projektai = await getData(x);

  if (projektai) {
    console.log(projektai);
    let template = "";
    projektai.forEach((projektas) => {
      let techn = "";
      if (projektas.technologies) {
        projektas.technologies.forEach((technology) => {
          techn += technology + ", ";
        });
        techn = techn.slice(0, -2);
      }
      template += `
            <div class="projektas">
                <h3>${projektas.name}</h3>
                <p>${projektas.description}</p>
                <p>${techn}</p>
                <a href="${projektas.link}" target="_blank">Link</a>
            </div>
            `;
    });
    document.querySelector(".projektai").innerHTML = template;
  }
};
loadProjects();

const loadExp = async (x, y) => {
    if (x) {
      const kiekis = await getData("work-experience");
      console.log(kiekis.length);
      x += kiekis.length;
    } else if (y) {
      x = y;
    } else {
      x = "work-experience";
    }
  const exp = await getData(x);

  if (exp) {
    console.log(exp);
    let template = "";
    exp.forEach((x) => {
      let skills = "";
      if (x.technologies) {
        x.skills.forEach((skill) => {
          skills += skill + ", ";
        });
        skills = skills.slice(0, -2);
      }
      template += `
            <div class="exp">
                <h3>${x.title}</h3>
                <p>${x.description}</p>
                <p>${skills}</p>
                <p>${x.company}</p>
                <p>${x.location}</p>
                <p>${x.date}</p>
            </div>
            `;
    });
    document.querySelector(".patirtis").innerHTML = template;
  }
};
loadExp();
const loadEdu = async (y) => {
  if (y) {
    const kiekis = await getData("education");
    console.log(kiekis.length);
    y += kiekis.length;
  } else {
    y = "education";
  }
  const edu = await getData(y);

  if (edu) {
    console.log(edu);
    let template = "";
    edu.forEach((x) => {
      template += `
            <div class="edu">
                <h3>${x.program}</h3>
                <p>${x.title}</p>
                <p>${x.year}</p>
                <p>${x.degree}</p>
            </div>
            `;
    });
    document.querySelector(".issilavinimas").innerHTML = template;
  }
};
loadEdu();

const loadKurs = async (x, y) => {
    if (x) {
        const kiekis = await getData("courses");
        console.log(kiekis.length);
        x += kiekis.length;
      } else if (y) {
        x = y;
      } else {
        x = "courses";
      }
  const kurs = await getData(x);

  if (kurs) {
    console.log(kurs);
    let template = "";
    kurs.forEach((x) => {
      let tags = "";
      if (x.tags) {
        x.tags.forEach((tag) => {
          tags += tag + ", ";
        });
        tags = tags.slice(0, -2);
      }
      template += `
              <div class="kurs">
                  <h3>${x.title}</h3>
                  <p>${x.description}</p>
                  <p>${tags}</p>
                  <p>${x.duration}</p>
                  <p>${x.completed}</p>
              </div>
              `;
    });
    document.querySelector(".kursai").innerHTML = template;
  }
};
loadKurs();

const loadTechOpt = async () => {
  const technologijos = await getData("projects/technologies");

  if (technologijos) {
    console.log(technologijos);
    let template = "";
    technologijos.forEach((technologija) => {
      template += `
              <option value="${technologija}">${technologija}</option>
              `;
    });
    document.querySelector("#options").innerHTML = template;
  }
};
loadTechOpt();

const loadTechOpt2 = async () => {
    const technologijos = await getData("courses/technologies");
  
    if (technologijos) {
      console.log(technologijos);
      let template = "";
      technologijos.forEach((technologija) => {
        template += `
                <option value="${technologija}">${technologija}</option>
                `;
      });
      document.querySelector("#options-kurs").innerHTML = template;
    }
  };
  loadTechOpt2();

document.querySelector("#options").addEventListener("change", async (e) => {
    const technologija = e.target.value;
    console.log(technologija);
  loadProjects("", `projects/technologies/${technologija}`);
});

document.querySelector("#options-kurs").addEventListener("change", async (e) => {
    const technologija = e.target.value;
    console.log(technologija);
  loadKurs("", `courses/technologies/${technologija}`);
});
