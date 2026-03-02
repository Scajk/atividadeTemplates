import { Ionicons } from "@expo/vector-icons";
import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View, SafeAreaView, Image, SafeAreaViewBase } from "react-native";

const a = 1

export default function template2({ navigation }) {
  const categories = [
  { id: "1", title: "Resort", icon: "umbrella-beach" },
  { id: "2", title: "Homestay", icon: "umbrella-beach" },
  { id: "3", title: "Hotel", icon: "umbrella-beach" },
  { id: "4", title: "Lodge", icon: "umbrella-beach" },
  { id: "5", title: "Villa", icon: "umbrella-beach" },
  { id: "6", title: "Apartment", icon: "umbrella-beach" },
  { id: "7", title: "Hostel", icon: "umbrella-beach" },
  { id: "8", title: "See all", icon: "grid" },
  ]

  const popularDestinations = [
    {}
  ]

  return (
    <SafeAreaView>
      <View style={styles.header}>
      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <View style={{flexDirection:"row"}}>
        <Ionicons name="person-circle" size={50}/>
        <View>
          <Text style={styles.welcome}>Welcome!</Text>
          <Text style={styles.nome}>Donna Stroupe</Text>
        </View>
        </View>
        <Ionicons name="notifications-outline" size={40}/>
      </View>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Category</Text>
          <MaterialIcons name="menu" size={24} color="#5A5A5A" />
        </View>

        <FlatList
          data={categories}
          renderItem={renderizarCategoria}
          keyExtractor={(item) => item.id}
          numColumns={4}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <MaterialIcons name="menu" size={24} color="#5A5A5A" />
        </View>

        <FlatList
          data={destinations}
          renderItem={renderizarDestino}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 16 }}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended</Text>
        </View>

        <FlatList
          data={recommended}
          renderItem={renderizarRecomendacao}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  header: {
    backgroundColor: "#4050cc",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },

  backButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 4,
  },

  welcome: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold'
  },

  nome: {
    color: "#fff",
    fontSize: 14
  },

  searchBox: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  input: {
    flex: 1,
    fontSize: 14,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  showAll: {
    color: "#5A6CF3",
    fontSize: 14,
  },

  categoryCard: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 6,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  categoryText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: "center",
  },

  doctorCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
  },

  doctorName: {
    fontWeight: "bold",
    fontSize: 14,
  },

  specialty: {
    fontSize: 12,
    color: "#666",
    marginVertical: 4,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  rating: {
    marginLeft: 4,
    fontSize: 12,
    color: "#666",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#5A6CF3",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
  },
});