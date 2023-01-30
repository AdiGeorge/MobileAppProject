import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';

const Notifications = props => {
   const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   return (
      <View>
          <Text>Notifications</Text>
          <View>
             <View>
                <Text>Chat</Text>
                <Text>When you receive a new message</Text>
             </View>
            <Switch
               trackColor={{ false: "#BABADD", true: "#BABADD" }}
               thumbColor={isEnabled ? "#BABADD" : "#5050A5"}
               onValueChange={toggleSwitch}
               value={isEnabled}
            />
          </View>
          <View>
             <View>
                <Text>Event Reminder</Text>
                <Text>An hour before events you are ‘going to’</Text>
             </View>
            <Switch
               trackColor={{ false: "#BABADD", true: "#BABADD" }}
               thumbColor={isEnabled ? "#BABADD" : "#5050A5"}
               onValueChange={toggleSwitch}
               value={isEnabled}
            />
          </View>
          
      </View>
   );
}

const styles = StyleSheet.create({
   
});

export default Notifications;