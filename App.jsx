import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();


// import SignUp from "./SignUp";
// import Login from "./Login";
import Sc1 from "./Sc1";
// import AdminSc from "./AdminSc";
import CustomHooks from "./CustomHooks";
// import Profile from './Profile';


export default function App() {

  return (  
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
      {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
      {/* <Stack.Screen name="Login" component={Login} /> */}
      <Stack.Screen name="Sc1" component={Sc1} />
      {/* <Stack.Screen name="AdminSc" component={AdminSc} /> */}
      <Stack.Screen name="CustomHooks" component={CustomHooks} />
      {/* <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} /> */}
      {/* <Stack.Screen name="Screen1" component={Screen1} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}