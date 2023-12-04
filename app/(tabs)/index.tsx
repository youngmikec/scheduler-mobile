import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import WelcomeBoard from '../../components/home-screen-comps/WelcomeBoard';

export default function IndexScreen() {
  return (
    <>
      <View style={styles.container}>
        <WelcomeBoard />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
