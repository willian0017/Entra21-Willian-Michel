import React from "react"

export class SearchBar extends React.Component {
    render() {
      return (
        <form>
          <input type="text" placeholder="Search..." />
          <p>
            <input type="checkbox" />
            {' '}
            Só mostrar produtos estocados
          </p>
        </form>
      );
    }
  }