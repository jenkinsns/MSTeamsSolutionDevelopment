import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './ServicesWebPart.module.scss';
import * as strings from 'ServicesWebPartStrings';

export interface IServicesWebPartProps {
  description: string;
}

export default class ServicesWebPart extends BaseClientSideWebPart <IServicesWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.services }">
    <div class="${ styles.container }">
      <div class="${ styles.row }">
        <div class="${ styles.column }">
          <span class="${ styles.title }">Welcome to Teams Personal tab 2!</span>
  <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
    <p class="${ styles.description }">${escape(this.properties.description)}</p>
      <a href="https://aka.ms/spfx" class="${ styles.button }">
        <span class="${ styles.label }">Learn more</span>
          </a>
          </div>
          </div>
          </div>
          </div>`;
  }

  protected get dataVersion(): Version {
  return Version.parse('1.0');
}

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  return {
    pages: [
      {
        header: {
          description: strings.PropertyPaneDescription
        },
        groups: [
          {
            groupName: strings.BasicGroupName,
            groupFields: [
              PropertyPaneTextField('description', {
                label: strings.DescriptionFieldLabel
              })
            ]
          }
        ]
      }
    ]
  };
}
}
