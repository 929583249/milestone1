import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My to do list</Text>
      </View>
      <View style={styles.leftTextContainer}>
        <Text style={styles.leftText}>fIRST THING</Text>
        <Text>------------------------</Text>
        <Text style={styles.leftText}>SECOND THING</Text>
        <Text>------------------------</Text>
        <Text style={styles.leftText}>THIRD THING</Text>
        <Text>------------------------</Text>
        <Text style={styles.leftText}>FOURTH THING</Text>
        <Text>------------------------</Text>
        </View>
      
      <TouchableOpacity
        onPress={() => alert('Add new to do item')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add new to do list</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {//调整位置
    position: 'absolute',
    top: 25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {//调整文本大小
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 30,//文本间距
    paddingBottom: 20,
    color:'red',
  },
  leftTextContainer: {
    position: 'absolute',
    top: 120, // Adjust according to the header size
    left: 20,//左边距离
    alignItems: 'flex-start',
    justifyContent: 'center',
    

  },
  leftText: {
    fontSize: 18, // Adjust this as needed文本大小
    color:'green',
  },
  button: {
    marginTop: 20, // 添加适当的边距
  },
  buttonText: {
    fontSize: 18, // 设置按钮文本大小
    color: 'blue', // 设置按钮文本颜色为蓝色
    top: 350,
  },
});
