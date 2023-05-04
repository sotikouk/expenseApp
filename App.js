import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import  IconButton  from './components/UI/IconButton';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator 
            screenOptions={({ navigation }) => ({headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
                            headerTintColor: 'white', 
                            tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500}, 
                            tabBarActiveTintColor: GlobalStyles.colors.accent500,
                            headerRight: ({tintColor}) => 
                            <IconButton icon="add" size={24} color={tintColor} onPress={() => { navigation.navigate('ManageExpense');
                            }}/>
                          })}>
      <BottomTabs.Screen name="RecentExpences" component={RecentExpenses} options={{
        title: 'Resent Expenses',
        tabBarLabel: 'Resent Expenses',
        tabBarIcon: ({color, size}) => <Ionicons name='hourglass' size={size} color={color}/> 
      }}/>
      <BottomTabs.Screen name="AllExpences" component={AllExpenses} options={{
        title: 'All Expenses',
        tabBarLabel: 'All Expenses',
        tabBarIcon: ({color, size}) => <Ionicons name='calendar' size={size} color={color}/> 
      }}/>
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
      <>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: 'white',
          }}>
            <Stack.Screen name="ExpencesOverview" component={ExpensesOverview} options={{headerShown: false}}/>
            <Stack.Screen name="ManageExpense" component={ManageExpense} options={{ presentation: 'modal'}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </>
  );
}
