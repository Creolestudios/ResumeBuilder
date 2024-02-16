import {createSlice} from '@reduxjs/toolkit';

const intialState = {
  userProfile: [],
  objective: '',
  experience: [],
  education: [],
  projects: [],
  skills: [],
  interests: '',
  userResume: '',
  profileImage: '',
  uniqueId: '',
};

const userSlice = createSlice({
  name: 'User',
  initialState: intialState,
  reducers: {
    addProfileDetails(state: any, action: any) {
      state.userProfile = action.payload;
    },
    addPreviousDetail(state: any, action: any) {
      state.userProfile = action.payload.userProfile;
      state.skills = action.payload.skills;
      state.objective = action.payload.objective;
      state.projects = action.payload.projects;
      state.experience = action.payload.experience;
      state.education = action.payload.education;
      state.userResume = action.payload.userResume;
      state.profileImage = action.payload.profileImage;
      state.uniqueId = action.payload.uniqueId;
    },
    adduniqueId(state: any, action: any) {
      state.uniqueId = action.payload;
    },
    addObjective(state: any, action: any) {
      state.objective = action.payload;
    },
    addInterests(state: any, action: any) {
      state.interests = action.payload;
    },
    addProfileImg(state: any, action: any) {
      state.profileImage = action.payload;
    },
    // ExperienceDetail
    addExperience(state: any, action: any) {
      state.experience = [...state.experience, {...action.payload}];
    },
    updateExperienceDetail(state: any, action: any) {
      const {id} = action.payload;
      const updateExperienceDetail = state.experience.map((experience: any) =>
        experience.id === id
          ? {
              ...action.payload,
            }
          : experience,
      );
      state.experience = updateExperienceDetail;
    },

    removeExperience(state: any, action: any) {
      state.experience = state.experience.filter(
        (item: any) => item.id != action.payload,
      );
    },
    // Education
    addEducation(state: any, action: any) {
      state.education = [...state.education, {...action.payload}];
    },
    updateEducationDetail(state: any, action: any) {
      const {id} = action.payload;
      const updateEducationDetail = state.education.map((education: any) =>
        education.id === id
          ? {
              ...action.payload,
            }
          : education,
      );
      state.education = updateEducationDetail;
    },
    removeEducation(state: any, action: any) {
      state.education = state.education.filter(
        (item: any) => item.id != action.payload,
      );
    },
    // For Project
    addProject(state: any, action: any) {
      state.projects = [...state.projects, {...action.payload}];
    },
    updateProjectDetail(state: any, action: any) {
      const {id, title} = action.payload;
      const updatedProjects = state.projects.map((project: any) =>
        project.id === id
          ? {
              ...action.payload,
            }
          : project,
      );
      state.projects = updatedProjects;
    },
    removeProject(state: any, action: any) {
      state.projects = state.projects.filter(
        (item: any) => item.title != action.payload,
      );
    },
    // For Skills
    addskills(state: any, action: any) {
      state.skills = [...state.skills, action.payload];
    },
    removeSkills(state: any, action: any) {
      state.skills = state.skills.filter((item: any) => item != action.payload);
    },
    //For Select Resume
    selectResume(state: any, action: any) {
      state.userResume = action.payload;
    },
  },
});

export const {
  addProfileDetails,
  addObjective,
  adduniqueId,
  addProfileImg,
  addInterests,
  addExperience,
  updateExperienceDetail,
  removeExperience,
  addEducation,
  updateEducationDetail,
  removeEducation,
  addProject,
  updateProjectDetail,
  removeProject,
  addskills,
  removeSkills,
  addPreviousDetail,
  selectResume,
} = userSlice.actions;
export default userSlice.reducer;
