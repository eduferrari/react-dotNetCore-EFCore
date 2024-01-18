import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import TitlePage from "../../components/TitlePage";

export default function ClienteForm() {
	let navigate = useNavigate();
	let {id} = useParams();

	return (
		<>
			<TitlePage title={'Cliente Detalhes ' + (id !== undefined ? id : '')}>
				<Button variant="outline-secondary" onClick={() => navigate(`/cliente/lista`)}>
					<i className="fas fa-angles-left me-2"></i>Voltar
				</Button>
			</TitlePage>
			<div></div>
		</>
	);
}