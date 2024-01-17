import "./App.css";
import Atividade from "./pages/atividades/Atividade";
import { Switch, Route } from "react-router-dom";
import Cliente from './pages/clientes/Cliente';
import Dashboard from './pages/dashboard/Dashboard';
import ClienteForm from './pages/clientes/ClienteForm';
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard}></Route>
      <Route path='/cliente/lista' component={Cliente}></Route>
      <Route path='/cliente/detalhe/:id?' component={ClienteForm}></Route>
      <Route path='/atividade/lista' component={Atividade}></Route>
      <Route path='/cliente/?id/atividade' component={Atividade}></Route>
      <Route component={PageNotFound}></Route>
    </Switch>
  );
}