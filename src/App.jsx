import React, { useState } from 'react';
import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';
import classNames from 'classnames';

// const products = productsFromServer.map((product) => {
//   const category = null; // find by product.categoryId
//   const user = null; // find by category.ownerId

//   return null;
// });

export const App = () => {
console.log(
usersFromServer,
categoriesFromServer,
productsFromServer,
)
 const [activeUser, setActiveUser] = useState('All');
 const [query, setQuery] = useState('');
 const [categories, setCategories] = useState([]);
 console.log(query)

 const resetAllFilters = () => {
  setCategories([]);
  setQuery('');
  setActiveUser('All');
 };

 const products = productsFromServer.map((product) => {
  const category = categoriesFromServer.find((category) => category.id === product.categoryId);

  const user = usersFromServer.find(user => user.id === category.ownerId);

  return {
    id: product.id,
    name: product.name,
    category: category.title,
    icon: category.icon,
    userName: user.name,
    sex: user.sex,
  };
 });

 const normalizedQuery = query.toLowerCase().trim();

 const filteredProducts = products.filter(product => {

  return activeUser === 'All' ? true : product.userName === activeUser
    && product.name.toLowerCase().includes(normalizedQuery)
    && !categories.length ? true : categories.includes(product.category);
 });

console.log(filteredProducts, normalizedQuery)

  return (
  <div className="section">
    <div className="container">
      <h1 className="title">Product Categories</h1>

      <div className="block">
        <nav className="panel">
          <p className="panel-heading">Filters</p>

          <p className="panel-tabs has-text-weight-bold">
            <a
              data-cy="FilterAllUsers"
              href="#/"
              className={classNames({
                'is-active': activeUser === 'All',
              })}
              onClick={() => setActiveUser('All')}
            >
              All
            </a>


    {usersFromServer.map(user => (
        <a
        key={user.id}
        data-cy="FilterUser"
        href="#/"
        className={classNames({
          'is-active': activeUser === user.name,
        })}
        onClick={() => setActiveUser(user.name)}
      >
        {user.name}
      </a>
    ))}
          </p>

          <div className="panel-block">
            <p className="control has-icons-left has-icons-right">
              <input
                data-cy="SearchField"
                type="text"
                className="input"
                placeholder="Search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />

              <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true" />
              </span>

              <span className="icon is-right">
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete"
                />
              </span>
            </p>
          </div>

          <div className="panel-block is-flex-wrap-wrap">
            <a
              href="#/"
              data-cy="AllCategories"
              className="button is-success mr-6 is-outlined"
              onClick={() => setCategories([])}
            >
              All
            </a>
            {categoriesFromServer.map((category) => (
              <a
              key={category.id}
              data-cy="Category"
              onClick={() => setCategories(prev => [...prev, category.title])}
              className={classNames(
                'button',
                'mr-2',
                'my-1',
                {
                  'is-info': categories.includes(category.title),
                }
              )}
              href="#/"
            >
              {category.title}
            </a>
            ))}
          </div>

          <div className="panel-block">
            <a
              data-cy="ResetAllButton"
              href="#/"
              className="button is-link is-outlined is-fullwidth"
              onClick={resetAllFilters}
            >
              Reset all filters
            </a>
          </div>
        </nav>
      </div>

      <div className="box table-container">
        <p data-cy="NoMatchingMessage">
          No products matching selected criteria
        </p>

        <table
          data-cy="ProductTable"
          className="table is-striped is-narrow is-fullwidth"
        >
          <thead>
            <tr>
              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  ID

                  <a href="#/">
                    <span className="icon">
                      <i data-cy="SortIcon" className="fas fa-sort" />
                    </span>
                  </a>
                </span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  Product

                  <a href="#/">
                    <span className="icon">
                      <i data-cy="SortIcon" className="fas fa-sort-down" />
                    </span>
                  </a>
                </span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  Category

                  <a href="#/">
                    <span className="icon">
                      <i data-cy="SortIcon" className="fas fa-sort-up" />
                    </span>
                  </a>
                </span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  User

                  <a href="#/">
                    <span className="icon">
                      <i data-cy="SortIcon" className="fas fa-sort" />
                    </span>
                  </a>
                </span>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr data-cy="Product">
              <td className="has-text-weight-bold" data-cy="ProductId">
                1
              </td>

              <td data-cy="ProductName">Milk</td>
              <td data-cy="ProductCategory">🍺 - Drinks</td>

              <td
                data-cy="ProductUser"
                className="has-text-link"
              >
                Max
              </td>
            </tr>

            <tr data-cy="Product">
              <td className="has-text-weight-bold" data-cy="ProductId">
                2
              </td>

              <td data-cy="ProductName">Bread</td>
              <td data-cy="ProductCategory">🍞 - Grocery</td>

              <td
                data-cy="ProductUser"
                className="has-text-danger"
              >
                Anna
              </td>
            </tr>

            <tr data-cy="Product">
              <td className="has-text-weight-bold" data-cy="ProductId">
                3
              </td>

              <td data-cy="ProductName">iPhone</td>
              <td data-cy="ProductCategory">💻 - Electronics</td>

              <td
                data-cy="ProductUser"
                className="has-text-link"
              >
                Roma
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)
}
