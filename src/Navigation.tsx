import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES, ROUTES_PARAMS} from './constants';
import CommonScreen from './screens/CommonScreen/CommonScreen';
import DashBoard from './screens/Dashboard/Dashboard';
import Education from './screens/Education.tsx/Education';
import Experience from './screens/Experience/Experience';
import Objective from './screens/Objective/Objective';
import PreView from './screens/PreviewTemplates/PreViewTemplates';
import Profile from './screens/Profile/Profile';
import Projects from './screens/Projects/Projects';
import SectionList from './screens/SectionList/SectionList';
import SelectTemplates from './screens/SelectTemplates/SelectTemplates';
import Skills from './screens/Skills/Skills';
const Navigation = () => {
  // Navigation
  const Stack = createNativeStackNavigator<ROUTES_PARAMS>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'fade_from_bottom',
          headerShown: false,
        }}>
        <Stack.Screen name={ROUTES.DASHBOARD} component={DashBoard} />
        <Stack.Screen
          name={ROUTES.SELECTTEMPLATES}
          component={SelectTemplates}
        />
        <Stack.Screen name={ROUTES.SECTIONLIST} component={SectionList} />
        <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
        <Stack.Screen name={ROUTES.OBJECTIVE} component={Objective} />
        <Stack.Screen name={ROUTES.PREVIEW} component={PreView} />
        <Stack.Screen name={ROUTES.COMMONSCREEN} component={CommonScreen} />
        <Stack.Screen name={ROUTES.EXPERIENCE} component={Experience} />
        <Stack.Screen name={ROUTES.PROJECTS} component={Projects} />
        <Stack.Screen name={ROUTES.EDUCATION} component={Education} />
        <Stack.Screen name={ROUTES.SKILLS} component={Skills} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
