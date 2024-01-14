import MDEditor, { selectWord } from "@uiw/react-md-editor";
// No import is required in the WebPack.
import "@uiw/react-md-editor/markdown-editor.css";
// No import is required in the WebPack.
import "@uiw/react-markdown-preview/markdown.css";

const mkdStr =
  "Il permet d'installer, de partager et de gérer les dépendances d'un projet.\n\n Voici comment utiliser NPM :\n\n```bash\n# Installation d'une dépendance\nnpm install package-name\n\n# Exécution d'un script\nnpm run script-name\n```";

function OneKeyword() {
  return (
    <>
      <div>
        <h2>NPM</h2>
        <h3>Node Package Manager</h3>
      </div>
      <p>Gestionnaire de paquets Node.js</p>
      <div data-color-mode="light">
        <div style={{ height: "500px", overflow: "auto" }}>
          <MDEditor.Markdown source={mkdStr} />
        </div>
      </div>
    </>
  );
}

export default OneKeyword;
