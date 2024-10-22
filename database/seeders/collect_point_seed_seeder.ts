import CollectPoint from '#models/collect_point';
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon';


export default class extends BaseSeeder {
  public async run() {
    // Dados do ponto de coleta
    try {
      await CollectPoint.create({
        name: 'Praça da Bandeira',
        embedCode: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1867112711893!2d-35.8877353251874!3d-7.21953219278636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e4e62a2a2dd%3A0xc5ba08562f6ae78!2sPra%C3%A7a%20da%20Bandeira%20-%20Centro%2C%20Campina%20Grande%20-%20PB%2C%2058400-087!5e0!3m2!1sen!2sbr!4v1727463219987!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        openAt: '2024-09-27 08:00:00' as unknown as DateTime<boolean>,
      closeAt: '2024-09-27 18:00:00' as unknown as DateTime<boolean>,

        phone: '(83) 99999-9999', // Telefone de contato
        street: 'Praça da Bandeira',
        city: 'Campina Grande',
        status: 'Ativo', // Status do ponto de coleta
        maxCapacity: 100, // Capacidade máxima
        aditionalInfo: 'Ponto de coleta central na cidade.', // Informações adicionais
      });
    }

    catch (error) {
      console.error(error);
    }
  }
}