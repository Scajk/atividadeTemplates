import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function template3({ navigation }) {
  const listaConversas = [
    {
      codigo: "1",
      usuario: "Claudia Alves",
      texto: "Do more of what you love.",
      horario: "3m ago",
      naoLidas: 3,
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      codigo: "2",
      usuario: "Dani Martinez",
      texto: "Do your own thing.",
      horario: "5m ago",
      naoLidas: 1,
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      codigo: "3",
      usuario: "Kimberly Nguyen",
      texto: "Kindness is beautiful.",
      horario: "1h ago",
      naoLidas: 2,
      foto: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      codigo: "4",
      usuario: "Mariana Napolitani",
      texto: "Live your purpose.",
      horario: "2h ago",
      naoLidas: 1,
      foto: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      codigo: "5",
      usuario: "Olivia Wilson",
      texto: "You got this.",
      horario: "5h ago",
      naoLidas: 0,
      foto: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      codigo: "6",
      usuario: "Rachelle Beaudry",
      texto: "You're wonderful.",
      horario: "Yesterday",
      naoLidas: 0,
      foto: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      codigo: "7",
      usuario: "Soo Jin Ae",
      texto: "Keep it simple.",
      horario: "Yesterday",
      naoLidas: 0,
      foto: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  const renderItemConversa = ({ item }) => (
    <View style={styles.cardConversa}>
      <Image source={{ uri: item.foto }} style={styles.imagemAvatar} />

      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={styles.nomeUsuario}>{item.usuario}</Text>
        <Text style={styles.textoMensagem}>{item.texto}</Text>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.textoHorario}>{item.horario}</Text>

        {item.naoLidas > 0 && (
          <View style={styles.badgeNaoLida}>
            <Text style={styles.textoBadge}>{item.naoLidas}</Text>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.tela}>
      <View style={styles.areaHeader}>
        <View style={styles.formaAzul} />

        <View style={styles.conteudoHeader}>
          <View style={styles.circuloIcone}>
            <Ionicons name="mail-outline" size={28} color="#4A66A0" />
            <View style={styles.badgeIcone}>
              <Text style={styles.textoBadgeIcone}>1</Text>
            </View>
          </View>

          <Text style={styles.tituloHeader}>Messages & Chat</Text>

          <View style={styles.linhaHeader} />

          <Pressable
            style={styles.botaoRetorno}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={20} color="#5E57C8" />
            <Text style={styles.textoRetorno}>Voltar</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.linhaAcoes}>
        <Text style={styles.textoMarcar}>Mark all read</Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.textoOrdenar}>Sort by time</Text>
          <MaterialIcons name="arrow-drop-down" size={20} color="#555" />
        </View>
      </View>

      <FlatList
        data={listaConversas}
        renderItem={renderItemConversa}
        keyExtractor={(item) => item.codigo}
        contentContainerStyle={{ padding: 16 }}
      />

      <View style={{ height: 100 }} />

      <View style={styles.menuInferior}>
        <View style={styles.itemMenu}>
          <Ionicons name="home-outline" size={24} color="#5E57C8" />
          <Text style={styles.textoMenu}>Home</Text>
        </View>

        <View style={styles.itemMenu}>
          <Ionicons name="chatbubble-outline" size={24} color="#5E57C8" />
          <Text style={styles.textoMenu}>Chat</Text>
        </View>

        <View style={styles.itemMenu}>
          <Ionicons name="mail" size={24} color="#5E57C8" />
          <Text style={styles.textoMenu}>Mail</Text>
        </View>

        <View style={styles.itemMenu}>
          <Ionicons name="person-outline" size={24} color="#5E57C8" />
          <Text style={styles.textoMenu}>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  textoMenu: {
    fontSize: 12,
    color: "#948fd3",
    marginTop: 4,
  },
  areaHeader: {
    height: 180,
    backgroundColor: "#F4F4F4",
    position: "relative",
  },
  botaoRetorno: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 10,
  },
  conteudoHeader: {
    marginTop: 60,
    marginRight: 20,
    alignItems: "flex-end",
  },
  formaAzul: {
    position: "absolute",
    left: -130,
    top: -120,
    width: 300,
    height: 300,
    backgroundColor: "#747cb8",
    borderRadius: 150,
  },
  tituloHeader: {
    fontSize: 26,
    fontWeight: "500",
    color: "#444",
  },
  circuloIcone: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 30,
    top: -20,
  },
  badgeIcone: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "#9194b6",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBadgeIcone: {
    color: "#fff",
    fontSize: 12,
  },
  linhaHeader: {
    width: "40%",
    height: 2,
    backgroundColor: "#4A66A0",
    marginTop: 20,
    borderRadius: 2,
  },
  textoRetorno: {
    color: "#9b96df",
    fontSize: 16,
    marginLeft: 4,
  },
  linhaAcoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textoMarcar: {
    color: "#555",
  },
  textoOrdenar: {
    color: "#555",
  },
  cardConversa: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  imagemAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nomeUsuario: {
    fontWeight: "bold",
    fontSize: 14,
  },
  textoMensagem: {
    color: "#777",
    fontSize: 13,
  },
  textoHorario: {
    fontSize: 11,
    color: "#999",
  },
  badgeNaoLida: {
    backgroundColor: "#938fc5",
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  textoBadge: {
    color: "#fff",
    fontSize: 12,
  },
  menuInferior: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  itemMenu: {
    alignItems: "center",
  }
});