import { Text, SectionList, StyleSheet } from "react-native";
import SecItem from "./SectionItem";
function SectionListItems(props) {
  const users = [
    {
      title: "A",
      data: [
        {
          id: "0",
          img: "https://thumbs.dreamstime.com/z/female-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg",
          name: "User 1",
        },
        {
          id: "2",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQScxU3F5I32uVCrfhvxrDPHXiarJ5Rjg3LwQ&usqp=CAU",
          name: "User 2",
        },
        {
          id: "3",
          img: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
          name: "User 3",
        },
      ],
    },
    {
      id: "1",
      title: "B",
      data: [
        {
          id: "4",
          img: "https://t4.ftcdn.net/jpg/02/45/28/17/360_F_245281783_3zeOLu7mhjUmYbFlBwSNsfwQmQZzukWo.jpg",
          name: "User 1",
        },
        {
          id: "5",
          img: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
          name: "User 2",
        },
      ],
    },
    {
      id: "2",
      title: "C",
      data: [
        {
          id: "4",
          img: "https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-cute-girl-avatar-is-available-for-commercial-use-png-image_678746.jpg",
          name: "User 1",
        }  
      ],
    },
    {
      id: "2",
      title: "D",
      data: [
        {
          id: "4",
          img: "https://t4.ftcdn.net/jpg/02/45/28/17/360_F_245281783_3zeOLu7mhjUmYbFlBwSNsfwQmQZzukWo.jpg",
          name: "User 1",
        }
      ],
    }
  ];

  return (
    <>
      <SectionList
        sections={users}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        renderItem={({ item }) => <SecItem name={item.name} img={item.img} />}
      ></SectionList>
    </>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "lightgrey",
    marginBottom: 5,
    width: "100%",
    padding: 10,
    fontWeight: "bold",
    fontSize:18,
  },
});
export default SectionListItems;