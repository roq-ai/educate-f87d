import { RenamedpublicInterface } from 'interfaces/renamedpublic';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  public_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  Renamedpublic?: RenamedpublicInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  public_id?: string;
  user_id?: string;
}
