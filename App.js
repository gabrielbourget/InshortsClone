import React from 'react';
import { 
  StyleSheet, Text, 
  View, Dimensions, 
  Image, Animated,
  PanResponder
} from 'react-native';

const ARTICLE_IMAGES = [
  { id: '1', uri: 'https://images.unsplash.com/photo-1564389009519-af84f2b766b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
  { id: '2', uri: 'https://images.unsplash.com/photo-1563775504414-43d7a41fa23b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' },
  { id: '3', uri: 'https://images.unsplash.com/photo-1563775506308-5812e69b313e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' },
  { id: '4', uri: 'https://images.unsplash.com/photo-1563453902-88aaf744686b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' },
  { id: '5', uri: 'https://images.unsplash.com/photo-1563287850-43074a35e139?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60s' },
]

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class App extends React.Component {

  constructor(props) {
    super(props)

    this.position = new Animated.ValueXY()

    this.state = {
      currentIndex: 0
    }
  }

  
  renderArticles = () => {
    return ARTICLE_IMAGES.map((item, i) => {
      return (
        <Animated.View 
        key={ item.id }
        style={ this.position.getLayout() }
          { ...this.PanResponder.panHandlers }
        >
          <View style={ styles.articleCradle }>
            <View style={ styles.articleImageCradle }>
              <Image
                source={{ uri: ARTICLE_IMAGES[i].uri }}
                style={ styles.articleImage }
              />
            </View>
            <View style={ styles.articleTextCradle }>
              <Text>
                Duis elit quis dolor duis id dolore ullamco magna amet est 
                veniam tempor irure veniam. Sit in fugiat sunt adipisicing 
                fugiat est reprehenderit deserunt veniam Lorem occaecat exercitation. 
                Ipsum cupidatat deserunt labore eu ut eu cupidatat esse do ipsum nisi 
                velit sunt. Fugiat ad amet elit consequat elit dolore.

                Dolore eiusmod elit nisi pariatur cillum. Tempor aliqua exercitation ex 
                amet pariatur enim labore pariatur cillum voluptate. Id deserunt aliquip 
                occaecat dolor proident do enim et nisi enim enim velit id. Et qui 
                eiusmod qui id nostrud labore nulla amet minim anim ut. Dolor nostrud 
                tempor et ipsum quis excepteur cupidatat. Laborum aute anim Lorem sint 
                tempor veniam. Id voluptate voluptate commodo voluptate veniam sunt 
                proident.

                Duis elit quis dolor duis id dolore ullamco magna amet est 
                veniam tempor irure veniam. Sit in fugiat sunt adipisicing 
                fugiat est reprehenderit deserunt veniam Lorem occaecat exercitation. 
                Ipsum cupidatat deserunt labore eu ut eu cupidatat esse do ipsum nisi 
                velit sunt. Fugiat ad amet elit consequat elit dolore.

                Dolore eiusmod elit nisi pariatur cillum. Tempor aliqua exercitation ex 
                amet pariatur enim labore pariatur cillum voluptate. Id deserunt aliquip 
                occaecat dolor proident do enim et nisi enim enim velit id. Et qui 
                eiusmod qui id nostrud labore nulla amet minim anim ut. Dolor nostrud 
                tempor et ipsum quis excepteur cupidatat. Laborum aute anim Lorem sint 
                tempor veniam. Id voluptate voluptate commodo voluptate veniam sunt 
                proident.

              </Text>
            </View>
          </View>
        </Animated.View>
      )
    })
  }
  
  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,
      // onPanResponderMove: (e, gestureState) => {
      //   this.position.setValue({ y: gestureState.dy })
      // },
      onPanResponderRelease: (e, gestureState) => {

      }
    })
  }

  render() {
    return (
      <View style={ styles.container }>
        { this.renderArticles() }
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  articleAnimationCradle: {

  },
  articleCradle: {
    flex: 1,
    position:'absolute',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: 'white'
  },
  articleImageCradle: {
    flex: 2,
    // backgroundColor: 'black'
  },
  articleImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'center'
  },
  baz: {
    flex: 3,
    padding: 15
  }
});
