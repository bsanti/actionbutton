import {Component, OnInit, VERSION} from '@angular/core';
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import ActionButton from "@arcgis/core/support/actions/ActionButton";
import Popup from "@arcgis/core/widgets/Popup";
import Point from "@arcgis/core/geometry/Point";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public name = 'Angular ' + VERSION.major;
  public div = 'viewDiv';
  private view: MapView;

  ngOnInit() {
    this.initMapWithMapImageLayer();
  }

  private initMapWithMapImageLayer() {
    const vtlLayer = new VectorTileLayer({
      url: "https://jsapi.maps.arcgis.com/sharing/rest/content/items/75f4dfdff19e445395653121a95a85db/resources/styles/root.json"
    });
    const map = new Map();
    map.add(vtlLayer);
    this.view = new MapView({
      container: "viewDiv",
      map: map});
  }

  public showPopup() {
    const point = new Point({
      hasZ: false,
      hasM: false,
      longitude: -102.18051,
      latitude: 31.929663,
    });

    const actionButton = new ActionButton({
      id: '1234567890',
      title: 'Click Me'});

    const popup = new Popup({
      location: point,
      title: 'title',
      actions: [actionButton]
    });

    popup.on('trigger-action', (event) => {
      console.log(event.action.id);
    })

    this.view.popup = popup;
    this.view.popup.visible = true
  }

  public disableActionButton() {
    this.view.popup.actions.at(0).disabled = true;
  }

  public enbleActionButton() {
    this.view.popup.actions.at(0).disabled = false
  }
}
