export type Routes = {[key: string]: keyof ROUTES_PARAMS};

export enum ROUTES {
  DASHBOARD = 'DashBoard',
  SELECTTEMPLATES = 'SelectTemplates',
  SECTIONLIST = 'SectionList',
  PROFILE = 'Profile',
  OBJECTIVE = 'Objective',
  FORMAT = 'FormatTemplates',
  PREVIEW = 'PreView',
  COMMONSCREEN = 'CommonScreen',
  SKILLS = 'Skills',
  EXPERIENCE = 'Experience',
  EDUCATION = 'Education',
  PROJECTS = 'Projects',
}

export type ROUTES_PARAMS = {
  DashBoard: undefined;
  SelectTemplates: {fromPreview: boolean};
  SectionList: undefined;
  Profile: undefined;
  Objective: undefined;
  FormatTemplates: undefined;
  PreView: undefined;
  CommonScreen: {btntitle: string; modalname: string; onPress: any};
  Skills: undefined;
  Experience: undefined;
  Education: undefined;
  Projects: undefined;
};
