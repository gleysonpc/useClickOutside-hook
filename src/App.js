import GlobalStyle from './styles/global'
import Dropdown from "./components/Dropdown";
import Button from './components/Button';



function App() {
    return (
        <>
            <GlobalStyle />
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <Dropdown>
                    <Button>Botão</Button>
                </Dropdown>
            </div>
        </>
    );
}

export default App;
