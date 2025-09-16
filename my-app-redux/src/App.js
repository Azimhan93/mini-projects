import { useSelector, useDispatch } from "react-redux";
import ContactForm from "./ContactForm";
import { clearAll } from "./features/contactsSlice";

export default function App() {
    const items = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();

    return (
        <div style={{ padding: 20, fontFamily: "sans-serif", maxWidth: 640 }}>
            <h1>Contacts</h1>
            <ContactForm />

      <div style={{ marginTop: 16 }}>
        <p>
          Total: <b>{items.length}</b>
        </p>

        {items.length === 0 ? (
          <p>No contacts yet</p>
        ) : (
          <ul style={{ lineHeight: 1.6 }}>
            {items.map(c => (
              <li key={c.id}>
                <b>{c.name}</b> — {c.email}
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => dispatch(clearAll())}
          disabled={items.length === 0}
        >
          Clear all
        </button>
      </div>
    </div>
    )
}