import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class SampleComponent extends Vue { 
  public message: string = 'Hello';
}