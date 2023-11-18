import type { Schema, Attribute } from '@strapi/strapi';

export interface MetaMeta extends Schema.Component {
  collectionName: 'components_meta_metas';
  info: {
    displayName: 'meta';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'meta.meta': MetaMeta;
    }
  }
}
