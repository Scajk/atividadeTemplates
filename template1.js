import { Ionicons } from "@expo/vector-icons";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";

export default function TelaInicial({ navigation }) {

  const categoriasDados = [
    { id: "1", titulo: "Consultation", icone: "people-outline" },
    { id: "2", titulo: "Dentist", icone: "medkit-outline" },
    { id: "3", titulo: "Cardiologist", icone: "heart-outline" },
    { id: "4", titulo: "Hospital", icone: "business-outline" },
    { id: "5", titulo: "Emergency", icone: "car-outline" },
    { id: "6", titulo: "Laboratory", icone: "flask-outline" },
  ];

  const medicosDados = [
    {
      id: "1",
      nome: "dr. Olivia Wilson",
      especialidade: "Consultant - Physiotherapy",
    },
    {
      id: "2",
      nome: "dr. Jonathan Patterson",
      especialidade: "Consultant - Internal Medicine",
    },
  ];

  const renderizarCategoria = ({ item: elemento }) => (
    <View style={estilos.cardCategoria}>
      <Ionicons name={elemento.icone} size={28} color="#5A6CF3" />
      <Text style={estilos.textoCategoria}>{elemento.titulo}</Text>
    </View>
  );

  const renderizarMedico = ({ item: elemento }) => (
    <View style={estilos.cardMedico}>
      <Ionicons name="person-circle" size={60} color="#ccc" />

      <View style={{ marginLeft: 12 }}>
        <Text style={estilos.nomeMedico}>{elemento.nome}</Text>
        <Text style={estilos.especialidade}>{elemento.especialidade}</Text>

        <View style={estilos.linhaAvaliacao}>
          <Ionicons name="star" size={16} color="#FFC107" />
          <Text style={estilos.textoAvaliacao}>4.9 (37 Reviews)</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={estilos.containerPrincipal}>

      <View style={estilos.topo}>

        <View style={estilos.linhaPerfil}>

          <View style={estilos.blocoPerfil}>
            <Ionicons name="person-circle" size={50} color="#fff" />
            <View style={{ marginLeft: 10 }}>
              <Text style={estilos.textoBoasVindas}>Welcome</Text>
              <Text style={estilos.nomeUsuario}>Dani Martinez</Text>
            </View>
          </View>

          <Pressable
            style={estilos.botaoVoltar}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={20} color="#fff" />
            <Text style={estilos.textoBotaoVoltar}>Voltar</Text>
          </Pressable>

        </View>

        <View style={estilos.caixaBusca}>
          <TextInput
            placeholder="Search doctor"
            placeholderTextColor="#888"
            style={estilos.inputBusca}
          />
          <Ionicons name="search" size={20} color="#5A6CF3" />
        </View>

      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={estilos.cabecalhoSecao}>
          <Text style={estilos.tituloSecao}>Categories</Text>
          <Text style={estilos.verTodos}>Show All</Text>
        </View>

        <FlatList
          data={categoriasDados}
          renderItem={renderizarCategoria}
          keyExtractor={(registro) => registro.id}
          numColumns={3}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />

        <View style={estilos.cabecalhoSecao}>
          <Text style={estilos.tituloSecao}>Top doctors</Text>
        </View>

        <FlatList
          data={medicosDados}
          renderItem={renderizarMedico}
          keyExtractor={(registro) => registro.id}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />

        <View style={{ height: 100 }} />

      </ScrollView>

      <View style={estilos.menuInferior}>

        <View style={estilos.itemMenu}>
          <Ionicons name="home" size={24} color="#fff" />
          <Text style={estilos.textoMenu}>Home</Text>
        </View>

        <View style={estilos.itemMenu}>
          <Ionicons name="people-outline" size={24} color="#fff" />
          <Text style={estilos.textoMenu}>Doctors</Text>
        </View>

        <View style={estilos.itemMenu}>
          <Ionicons name="calendar-outline" size={24} color="#fff" />
          <Text style={estilos.textoMenu}>Appointment</Text>
        </View>

        <View style={estilos.itemMenu}>
          <Ionicons name="person-outline" size={24} color="#fff" />
          <Text style={estilos.textoMenu}>Profile</Text>
        </View>

      </View>

    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  topo: {
    backgroundColor: "#5A6CF3",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  linhaPerfil: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  blocoPerfil: {
    flexDirection: "row",
    alignItems: "center",
  },
  botaoVoltar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  textoBotaoVoltar: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 4,
  },
  textoBoasVindas: {
    color: "#fff",
    fontSize: 14,
  },
  nomeUsuario: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  caixaBusca: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  inputBusca: {
    flex: 1,
    fontSize: 14,
  },
  cabecalhoSecao: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  tituloSecao: {
    fontSize: 16,
    fontWeight: "bold",
  },
  verTodos: {
    color: "#5A6CF3",
    fontSize: 14,
  },
  cardCategoria: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 6,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  textoCategoria: {
    marginTop: 8,
    fontSize: 12,
    textAlign: "center",
  },
  cardMedico: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  nomeMedico: {
    fontWeight: "bold",
    fontSize: 14,
  },
  especialidade: {
    fontSize: 12,
    color: "#666",
    marginVertical: 4,
  },
  linhaAvaliacao: {
    flexDirection: "row",
    alignItems: "center",
  },
  textoAvaliacao: {
    marginLeft: 4,
    fontSize: 12,
    color: "#666",
  },
  menuInferior: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#5A6CF3",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
  },
  itemMenu: {
    alignItems: "center",
  },
  textoMenu: {
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
  },
});