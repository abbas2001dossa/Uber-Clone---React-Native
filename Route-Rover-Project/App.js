import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Text, View ,Platform} from 'react-native';
import Tw from 'twrnc';
import { Provider } from 'react-redux';
import { store } from './Store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import MapScreen from './Screens/MapScreen';
const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Provider store={store}>
        <KeyboardAvoidingView 
          style={Tw`flex-1`} 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
          keyboardVerticalOffset={Platform.OS ==='ios' ? -64 : 0 }
        >


          <Stack.Navigator>

            <Stack.Screen name="Home" component={HomeScreen} 
              options={{
                headerShown:false,presentation:""
              }}
            />
            <Stack.Screen name="Map" component={MapScreen}
              options={{
                headerShown:false,
              }}
            />
    
          </Stack.Navigator>
        </KeyboardAvoidingView>  
      </Provider>
    </NavigationContainer>
  );
}