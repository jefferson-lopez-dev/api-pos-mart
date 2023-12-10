import { app } from "./app";
import { ConnectionDB } from "./libs";

ConnectionDB();

const PORT = 1204;

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
