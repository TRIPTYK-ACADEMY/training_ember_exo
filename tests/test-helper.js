import Application from 'training-ember-exo/app';
import config from 'training-ember-exo/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
