<script setup lang="ts">
import { useLoaderStore } from "@/store/loader-store";
import { MessageType, useMessageStore } from "@/store/message-store";
import { usePeopleStore } from "@/store/people-store";
import { cpfFormat } from "@/utils/data-format";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const peopleStore = usePeopleStore();
const messageStore = useMessageStore();
const loaderStore = useLoaderStore();

const { people } = storeToRefs(peopleStore);

const goToEditPage = (id: number) => {
  router.push(`/editar/${id}`);
};

const goToNewPage = () => {
  router.push("/novo");
};

onMounted(async () => {
  loaderStore.setLoading(true);
  try {
    await peopleStore.getPeople();
  } catch {
    messageStore.showMessage(
      "Ocorreu um erro ao carregar os dados",
      MessageType.Error,
    );
  } finally {
    loaderStore.setLoading(false);
  }
});
</script>

<template>
  <div class="home-page">
    <h1>Pessoas cadastradas</h1>

    <div class="create-new">
      <button type="button" @click="goToNewPage">Criar novo cadastro</button>
    </div>

    <table class="peopletable">
      <thead>
        <tr>
          <th>CPF</th>
          <th>Nome</th>
          <th>Cidade</th>
          <th>&nbsp;</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="person in people">
          <td>{{ cpfFormat(person.cpf) }}</td>
          <td>{{ person.name }}</td>
          <td>{{ person.city }}, {{ person.state }}</td>
          <td>
            <button type="button" @click="goToEditPage(person.id)">
              Editar
            </button>
          </td>
        </tr>

        <tr v-if="people.length === 0">
          <td colspan="4">Não há pessoas cadastradas.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.create-new {
  margin: 10px auto;

  button {
    font-size: 14pt;
  }
}

.peopletable {
  border-collapse: collapse;

  &,
  th,
  td {
    border: 1px solid var(--table-border);
  }

  th,
  td {
    padding: 5px;
  }
}
</style>
