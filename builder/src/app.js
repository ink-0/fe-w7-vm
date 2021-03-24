import { renderProduct } from "./productBox";
<<<<<<< HEAD
renderProduct();
=======
import { WalletView } from "./js/view/WalletView";
import { WalletModel} from "./js/model/WalletModel";

renderProduct();

const model = new WalletModel;
const view = new WalletView(model);
view.update();

model.addObserver(view);
>>>>>>> 3fc5eb6810eaffd00ce0605410868f6c19214066
