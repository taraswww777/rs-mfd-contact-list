import React, {memo} from 'react';
import {Breadcrumb} from 'react-bootstrap';
import {Link} from 'react-router-dom';

interface BreadcrumbsProps {
  pathNames: string[]
}

export const Breadcrumbs = memo<BreadcrumbsProps>(({
  pathNames
}) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to={'/'}>Home</Link>
      </Breadcrumb.Item>
      {pathNames.map((name, index) => {
        const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`;

        // Определяем, является ли текущий элемент последним в списке
        const isLast = index === pathNames.length - 1;

        return isLast ? (
          <Breadcrumb.Item key={routeTo} active aria-current="page">{name}</Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item>
            <Link to={routeTo}>{name}</Link>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  )
});
