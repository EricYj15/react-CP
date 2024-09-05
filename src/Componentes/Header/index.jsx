import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="container">
			<header>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/sobre'>Sobre</Link>
						</li>
						{/* <li>
							<Link to='/servicos'>Serviços</Link>
						</li> */}
						<li>
							<Link to='/contato'>Contato</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}

export default Header;
