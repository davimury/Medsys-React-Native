import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button, FlatList, Alert } from 'react-native';
import LOGO from './assets/logo.png';
import Password from './components/PasswordTextBoxNative'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoSpacing}>
        <Image style={styles.logo} source={LOGO} />
        <Text style={styles.title}>MedSys</Text>
      </View>

      <TextInput style={styles.input} placeholder="Email" />
      <Password />
      <FlatList
        data={[{ title: 'Entrar' }, { title: 'Cadastrar' }]}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.itemContainer}>
              <Button
                style={{ maxWidth: '100%', maxHeight: '100%' }}
                title={item.title}
                onPress={() => Alert.alert(item.title)}
              />
            </View>
          );
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: 150,
    margin: 10,
    height: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoSpacing: {
    marginVertical: 50,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 32,
  },
  input: {
    width: '80%',
    fontSize: 18,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

