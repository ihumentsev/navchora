import { LangItem, LangLink, LangList } from './LangBox.styled';

export default function LangBox() {
  return (
    <LangList className="lang_list">
      <LangItem className="lang_item">
        <LangLink className="lang_link" href="#">
          UA
        </LangLink>
      </LangItem>
      <LangItem className="lang_item">
        <LangLink className="lang_link" href="#">
          RU
        </LangLink>
      </LangItem>
    </LangList>
  );
}
