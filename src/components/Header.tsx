import { MainNav } from "./card/styles";
import { CartComp } from "./cart";

export function Header() {
    return (
    <MainNav>
      <div>
        <img
          src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
          alt="logo"
        />
       <CartComp></CartComp>

      </div>
    </MainNav>
  );
}
