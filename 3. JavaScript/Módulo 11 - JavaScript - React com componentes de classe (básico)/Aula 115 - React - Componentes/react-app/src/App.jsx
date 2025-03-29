import './App.css'
import Main from './components/Main' // importando um componente criado localmente
import NewMain from './components/newMain'

// jsx é uma extensão de sintaxe que permite escrever marcação semelhante a html em arquivos javaScript, tornando assim dinâmico o desenvolvimento de aplicativos

function App() { // funções retornam um componente

  return ( // quando retornamos mais de uma linha, precisamos de um parênteses
    // quando utilizamos mais de uma tag dentro de um escopo de return, precisamos de uma div pai. Essa div pode ser um fragment(<> </>), as famosas divs vazias ou uma div(<div> </div>)
    <> 
      <h1>Hello world!</h1>
      <p>Lorem ipsum dolor</p>

      <Main /> {/* Utilizando o componente importado que foi criado localmente */}

      <NewMain />
    </>
  )
}

export default App // exportando 
